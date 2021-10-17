var Post=require('../models/Post.model')
var User=require('../models/User.model')
var Comment=require('../models/Comment.model')
const { validationResult } = require("express-validator");

exports.getComments = async (req, res, next) => {
    try {
        var data=await Comment.find({}).sort({ createdAt: 'desc' }).populate('user post');
        res.json(data)
    } catch (err) {
        console.log(err)
      res.json("something went wrong");
    }
};

exports.createComment= async(req,res,next)=>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        var userid = req.params.userid;
        var postid = req.params.postid;
        const comment = await Comment.create({
            comment:req.body.comment,
            post:postid,
            user:userid
        });
        await comment.save();

        const userById = await User.findById(userid);
        userById.comments.push(comment);
        await userById.save();
        const PostById = await Post.findById(postid);
        PostById.comments.push(comment);
        await PostById.save();
        res.json(comment);
    }
    catch(err){
        console.log(err)
        res.json("something went wrong");
    }
}