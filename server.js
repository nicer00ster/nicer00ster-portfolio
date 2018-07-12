const next = require('next');
const express = require('express');
const path = require('path');
const Router = require('next/router');

const { createServer } = require('http');
const { join } = require('path');
const { parse } = require('url');

const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const info = require('./private');
const port = parseInt(process.env.PORT, 10) || 3333

const dev = process.env.NODE_ENV !== 'production';
// const app = next(); //set this before pushing live
const app = next({ dev });
const handle = app.getRequestHandler();



const transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  auth: {
    user: info.EMAIL,
    pass: info.PASS
  }
}));

const send = ({ email, name, selected, message }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`
  const mailOptions = {
    from,
    to: info.EMAIL,
    subject: `New message from ${from} about ${selected}`,
    text: message,
    replyTo: from
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}

app.prepare().then(() => {
  const server = express();

  server
    .use(bodyParser.json())
    .get('/service-worker.js', (req, res) => {
      const parsedUrl = parse(req.url, true);
      const { pathname } = parsedUrl;
      const filePath = join(__dirname, '.next', pathname);
      app.serveStatic(req, res, filePath);
    })
    .get('*', (req, res) => {
      console.log(req.url)
      return handle(req, res);
    })
    .post('/connect', (req, res) => {
        const { name, email, selected, message } = req.body;
        send({ email, name, selected, message }).then(() => {
          console.log(`Sent the message "${message}" from <${name}> ${email}.`);
          res.set({ juice: 'success' })
          res.send('success');
        }).catch((err) => {
          console.log(`Failed to send the message "${message}" from <${name}> ${email} with the error ${err && err.message}`);
          res.set({ juice: 'error' })
          res.send('error');
        })
    })
    .listen(port, err => console.log(err || `> Ready on http://localhost:${port}`))
});
