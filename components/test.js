<Typing cursor={<Cursor />} className="hypertext__cursor" speed={55} >
  <Typing.Delay ms={500} />
  <ul>
    <li>
      <span className="hypertext__span">
        <span className="hypertext__content"> $ >></span>{' '}
        JavaScript: [&#9632;&#9632;&#9632;&#9632;&#9632;&#9633;&#9633;]
      </span>
    </li>
    <Typing.Delay ms={2000} />
    <li>
      <span className="hypertext__span">
        <span className="hypertext__cursor"> $ >></span>{' '}
        React: [&#9632;&#9632;&#9632;&#9632;&#9632;&#9633;&#9633;] 80%
      </span>
    </li>
    <Typing.Delay ms={1000} />
    <li>
      <span className="hypertext__span">
        <span className="hypertext__cursor"> $ >></span>{' '}
        Sketch: [&#9632;&#9632;&#9632;&#9632;&#9632;&#9633;&#9633;] 65%
      </span>
    </li>
    <Typing.Delay ms={1000} />
    <li>
      <span className="hypertext__span">
        <span className="hypertext__cursor"> $ >></span>{' '}
        <Typing.Backspace count={10} delay={750} />
      </span>
    </li>
    <Typing.Delay ms={1000} />
    <li>
      <span className="hypertext__cursor"> $ >></span> Neither
      could deleting a line of text.
      <Typing.Reset count={1} delay={750} />
      <span> Or the entire tree.</span>
      <Typing.Reset delay={2000} />
    </li>
    </ul>
  </Typing>














  {
    "name": "nicer00ster",
    "short_name": "nicer00ster",
    "icons":
    [{
      "src": "/icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png"
    }, {
      "src": "/icons/icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png"
    }, {
      "src": "/icons/icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png"
    }, {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }],
    "start_url": "/",
    "display": "standalone",
    "theme_color": "#5bb6ff",
    "background_color": "#ffc18e"
  }






// Express

const server = express();

server.get('*', (req, res) => {
  return handle(req, res);
});

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





// createServer((req, res) => {
//   const { headers, method, url } = req;
//   let body = [];
//   req.on('error', (err) => {
//     console.error(err);
//   }).on('data', (data) => {
//     body.push(data);
//   }).on('end', () => {
//     body = Buffer.concat(body).toString();
//     // Handle emails here
//     if(req.method === 'POST' && req.url === '/api/contact') {
//       const { name, email, message } = body;
//       console.log(body);
//       const transporter = nodemailer.createTransport(smtpTransport({
//         service: 'gmail',
//         auth: {
//           user: info.EMAIL,
//           pass: info.PASS
//         }
//       }));
//       const mailOptions = {
//         from: email,
//         to: info.EMAIL,
//         subject: name,
//         text: message,
//         replyTo: email
//       }
//       transporter.sendMail(mailOptions, (err, res) => {
//         if(err) {
//           console.error('Error: ', err);
//         } else {
//           console.log('Message sent successfully: ', res);
//         }
//       });
//     }
//   })
