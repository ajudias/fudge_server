var express = require('express');
var router = express.Router();
const Comment=require('../controllers/CommentController');
const { body } = require("express-validator");

/* GET users listing. */
router.get('/',Comment.getComments);
router.post('/:userid/:postid',
        body("comment").trim().not().isEmpty().withMessage("Comment is required"),
        Comment.createComment);

module.exports = router;
