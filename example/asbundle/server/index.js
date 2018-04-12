// server side, CJS

const {wire} = require('hypermorphic');

const index = (title) => wire(process, ':document')`<!doctype html>
<html>
  <head>
    <title>${title}</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <script defer src="dist/index.js"></script>
  </head>${body()}
</html>`;

const body = () => wire(process, ':body')`
  <body>
    <main></main>
    <footer>
      served @ ${(new Date).toLocaleString()}
    </footer>
  </body>`;

const fs = require('fs');
const http = require('http');
const path = require('path');
const zlib = require('zlib');

const mainJS = path.join(__dirname, '..', 'dist', 'main.js');

http.createServer((req, res) => {
  if (req.url === '/dist/index.js') {
    res.writeHead(200, {
      'content-type': 'application/javascript',
      'content-encoding': 'gzip'
    });
    fs.createReadStream(mainJS).pipe(zlib.createGzip()).pipe(res);
  } else if (req.url === '/favicon.ico') {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('');
  } else {
    res.writeHead(200, {'content-type': 'text/html'});
    res.end(index('hypermorphic'));
  }
}).listen(8080, function () {
  console.log(`http://localhost:${this.address().port}/`);
});
