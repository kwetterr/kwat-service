const mongoose = require('mongoose');
const Posts = mongoose.model('posts');

exports.baseRoute = async (req, res) => {
  res.send('Server running');
}

exports.getPosts = async (req, res) => {
  const posts = await Posts.find();
  res.json(posts);
}

exports.createPost = async (req, res) => {
  await new Posts(req.body).save((err, data) => {
    if(err) {
      res.status(500).json({
        message: "Something went wrong, please try again later."
      });
    } else {
      res.status(200).json({
        message: "Post Created",
        data
      })
    }
  })
}