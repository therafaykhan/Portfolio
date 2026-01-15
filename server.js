const express = require('express');
const next = require('next');
const path = require('path');
const { exec } = require('child_process');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Serve static files
  server.use('/static', express.static(path.join(__dirname, 'static')));

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const port = parseInt(process.env.PORT, 10) || 3000;

  server.listen(port, (err) => {
    if (err) throw err;

    console.log(`> Ready on http://localhost:${port}`);

    // Automatically open the browser
    if (process.platform === 'win32') {
      exec(`start http://localhost:${port}`);
    } else if (process.platform === 'darwin') {
      exec(`open http://localhost:${port}`);
    } else {
      exec(`xdg-open http://localhost:${port}`);
    }
  });
});