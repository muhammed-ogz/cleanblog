const Text = require('../models/Texts');

const PageControllers = {
  getAllPosts: async (req, res) => {
    const blogs = await Text.find({});
    res.render('index', {
      blogs,
    });
  },
  getAbout: (req, res) => {
    res.render('about');
  },
  getPost: async (req, res) => {
    const blog = await Text.findById(req.params.id);
    res.render('post', {
      blog,
    });
  },
  getAddPost: (req, res) => {
    res.render('add_post');
  },
  getPostInfo: async (req, res) => {
    const blog = await Text.findOne({ _id: req.params.id });
    res.render('edit', {
      blog,
    });
  },
};
module.exports = PageControllers;
