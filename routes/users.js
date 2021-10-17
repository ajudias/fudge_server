var express = require('express');
var router = express.Router();
const User=require('../controllers/UserController');
const { body } = require("express-validator");

/* GET users listing. */
router.get('/',User.getUsers);
router.post('/',
        body("name").trim().not().isEmpty().withMessage("Name is required"),
        body("image").trim().not().isEmpty().withMessage("Image is required"),
        User.createUser);

module.exports = router;
