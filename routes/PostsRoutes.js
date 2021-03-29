const express = require('express');
const router = express.Router();

const postController = require('../controllers/PostController');

router.get('/', postController.baseRoute);
router.get('/getposts', postController.getPosts);
router.post('/create', postController.createPost);

module.exports = router;

