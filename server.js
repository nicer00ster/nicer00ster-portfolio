const next = require('next');
const express = require('express');
const path = require('path');

const { createServer } = require('http');
const { join } = require('path');
const { parse } = require('url');

const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const info = require('./private');
const port = parseInt(process.env.PORT, 10) || 3001

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// const sendMail = text => {
//   return new Promise((resolve, reject) => {
//     transporter.sendMail(text, (error, info) => {
//       if (error) {
//         reject(error);
//         return;
//       }
//       resolve(info);
//     });
//   });
// }


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
      return handle(req, res);
    })
    .post('/api/contact', (req, res) => {
      const { name, email, message } = req.body;
      const transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        auth: {
          user: info.EMAIL,
          pass: info.PASS
        }
      }));
      const mailOptions = {
        from: email,
        to: info.EMAIL,
        subject: name,
        text: message,
        replyTo: email
      }
      transporter.sendMail(mailOptions, (err, res) => {
        if(err) {
          console.error('Error: ', err);
        } else {
          console.log('Message sent successfully: ', res);
        }
      });
    })
    .listen(port, err => console.log(err || `> Ready on http://localhost:${port}`))
});
