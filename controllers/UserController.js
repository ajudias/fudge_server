var User=require('../models/User.model')
const { validationResult } = require("express-validator");

exports.getUsers = async (req, res, next) => {
    try {
        var data=await User.find({}).sort({ createdAt: 'desc' }).populate('posts comments');
        res.json(data)
    } catch (err) {
        console.log(err)
      res.json("something went wrong");
    }
};

exports.createUser= async(req,res,next)=>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        var user = new User({ name: req.body.name, image:req.body.image });
 
        // save model to database
        user.save(function (err, book) {
            if (err) return res.json('User creation failed');
            res.json(user);
        });
    }
    catch(err){
        res.json("something went wrong");
    }
}