const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const PORT = 5000;
const Text = require('./models/Texts');

mongoose.connect('mongodb://localhost/cleanblogdb');

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method', {
  methods: ['POST', 'GET'],
}));
app.use(express.json());

app.get('/', async (req, res) => {
  const blogs = await Text.find({});
  res.render('index', {
    blogs,
  });
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/post/:id', async (req, res) => {
  const blog = await Text.findById(req.params.id);
  res.render('post', {
    blog,
  });
});
app.get('/add_post', (req, res) => {
  res.render('add_post');
});
app.get('/post', (req, res) => {
  res.render('post');
});

//Verileri getirme
app.post('/blogs', async (req, res) => {
  await Text.create(req.body);
  res.redirect('/');
});

// Veri Değiştirme editleme için gerekli postun verileri isteniyor.
app.get('/blogs/edit/:id', async (req, res) => {
  const blog = await Text.findOne({ _id: req.params.id });
  res.render('edit', {
    blog,
  });
});

// Verileri Güncelleme
app.put('/blogs/:id', async (req, res) => {
  const blog = await Text.findOne({ _id: req.params.id });
  blog.title = req.body.title;
  blog.message = req.body.message;
  blog.save();
  res.redirect(`/post/${req.params.id}`);
});

// Veri Silme
app.delete('/blogs/:id', async (req, res) => {
  await Text.findOneAndDelete({ _id: req.params.id });
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server running on : ${PORT} PORT`);
  console.log(`Click here open to server on : http://127.0.0.1:${PORT}`);
});
