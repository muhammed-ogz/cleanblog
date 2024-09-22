const express = require('express');
const ejs = require('ejs');
const app = express();
const PORT = 5000;


app.set("view engine","ejs");
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add_post', (req, res) => {
  res.render('add_post');
});
app.get('/post', (req, res) => {
  res.render('post');
});

app.listen(PORT, () => {
  console.log(`Server running on : ${PORT} PORT`);
  console.log(`Click here open to server on : http://127.0.0.1:${PORT}`);
});
