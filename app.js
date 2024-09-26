const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;
const Text = require('./models/Texts');

mongoose.connect('mongodb://localhost/cleanblogdb')

app.set("view engine","ejs");

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get('/', async (req, res) => {
  const blogs = await Text.find({});
  res.render('index',{
    blogs
  });
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/post/:id', async (req, res) => {
    const blog = await Text.findById(req.params.id);
    res.render('post',{
      blog
    })
});
app.get('/add_post', (req, res) => {
  res.render('add_post');
});
app.get('/post', (req, res) => {
  res.render('post');
});

app.post('/blogs', async(req,res)=>{
  await Text.create(req.body);
  res.redirect('/')
})

app.listen(PORT, () => {
  console.log(`Server running on : ${PORT} PORT`);
  console.log(`Click here open to server on : http://127.0.0.1:${PORT}`);
});
