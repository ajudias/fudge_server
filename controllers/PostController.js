var Post=require('../models/Post.model')
var User=require('../models/User.model')
const { validationResult } = require("express-validator");

exports.getPosts = async (req, res, next) => {
    try {
        var data=await Post.find({}).sort({ createdAt: 'desc' }).populate('user comments');
        res.json(data)
    } catch (err) {
        console.log(err)
      res.json("something went wrong");
    }
};

exports.createPost= async(req,res,next)=>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        var id = req.params.userid;
        console.log()
        const { title, body} = req.body;
        const post = await Post.create({
            title,
            body,
            user:id
        });
        await post.save();

        // const userById = await User.find({_id:id});
        const userById = await User.findById(id);
        userById.posts.push(post);
        await userById.save();
        res.json(post);
    }
    catch(err){
        console.log(err)
        res.json("something went wrong");
    }
}