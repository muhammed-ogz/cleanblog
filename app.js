const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const PORT = 5000;
const Text = require('./models/Texts');
const BlogController = require('./Controllers/BlogController');
const PageController = require('./Controllers/PageController');

mongoose.connect('mongodb://localhost/cleanblogdb');

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);
app.use(express.json());

app.get('/', PageController.getAllPosts);
app.get('/about', PageController.getAbout);
app.get('/post/:id', PageController.getPost);
app.get('/add_post', PageController.getAddPost);
app.get('/blogs/edit/:id', PageController.getPostInfo);

app.post('/blogs', BlogController.sendAddPost);

app.put('/blogs/:id', BlogController.updatePost);

app.delete('/blogs/:id',BlogController.deletePost);

app.listen(PORT, () => {
  console.log(`Server running on : ${PORT} PORT`);
  console.log(`Click here open to server on : http://127.0.0.1:${PORT}`);
});
