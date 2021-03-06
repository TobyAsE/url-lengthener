const express = require('express');

const app = express();

app.get('/link/:link', (req, res) => res.send(`${req.params.link}`));
app.use(express.static('public'));

app.listen(3000);