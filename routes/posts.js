var express = require('express');
var router = express.Router();
const Post=require('../controllers/PostController');
const { body } = require("express-validator");

/* GET users listing. */
router.get('/',Post.getPosts);
router.post('/:userid',
        body("title").trim().not().isEmpty().withMessage("Title is required"),
        body("body").trim().not().isEmpty().withMessage("Body is required"),
        Post.createPost);

module.exports = router;
