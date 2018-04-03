const express = require('express');
const next = require('next');
const foo = require('./test/foo');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const dir = process.env.NODE_ENV === 'production' ? '' : 'src';

const app = next({ dir: dir, dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('/test', (req, res) => {
      return res.send('Api');
    });

    server.get('*', (req, res) => {
      return handle(req, res)
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
      console.log(foo.foo());
    })
  });
