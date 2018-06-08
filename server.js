const next = require('next');
const { createServer } = require('http');
const { join } = require('path');
const { parse } = require('url');

const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const info = require('./private');

const dev = process.env.NODE_ENV !== 'production';
const app = next();
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
  createServer((req, res) => {
    const { headers, method, url } = req;
    let body = [];
    req.on('error', (err) => {
      console.error(err);
    }).on('data', (data) => {
      body.push(data);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
    })

    // Handle emails here
    if(req.method === 'POST' && req.url === '/api/contact') {
      const { name, email, message } = body;
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
    }

    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    if (pathname === '/service-worker.js') {
      const filePath = join(__dirname, '.next', pathname)
      app.serveStatic(req, res, filePath)
    } else {
      handle(req, res, parsedUrl)
    }
    }).listen(3000, () => {
      console.log(`> Ready on http://localhost:${3000}`)
    });

  });
