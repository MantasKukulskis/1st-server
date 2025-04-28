import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <h1> labas rytas, lietuva! </h1>
  </body>
  </html>`);
})

app.listen(port, () => {
  console.log(`Server is running: http://localhost:${port}`)
});