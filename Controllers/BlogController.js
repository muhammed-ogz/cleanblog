const Text = require('../models/Texts');

const BlogController = {
  sendAddPost: async (req, res) => {
    await Text.create(req.body);
    res.redirect('/');
  },
  updatePost: async (req, res) => {
    const blog = await Text.findOne({ _id: req.params.id });
    blog.title = req.body.title;
    blog.message = req.body.message;
    blog.save();
    res.redirect(`/post/${req.params.id}`);
  },
  deletePost: async (req, res) => {
    await Text.findOneAndDelete({ _id: req.params.id });
    res.redirect('/');
  },
};

module.exports = BlogController;
