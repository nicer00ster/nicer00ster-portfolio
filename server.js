const express = require('express');
const next = require('next');

const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const info = require('./private');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const sendMail = text => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(text, (error, info) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(info);
    });
  });
}


app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());

  server.post('/api/contact', (req, res) => {
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
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('Listening on http://localhost:3000');
  });
});
