const express = require('express');
const path = require('path');

const app = express();

app.get('/.well-known/pki-validation/:hash', (req, res , next) => {
  console.log(req.params.hash);
  res.sendFile(path.resolve(`./${req.params.hash}`));
});

app.listen(3000, () => console.log('up to verify!'));
