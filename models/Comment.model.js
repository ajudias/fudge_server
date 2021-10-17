var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var CommentSchema=new Schema(
    {
        comment:String,
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        },
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps:true
    }
)
const Comment=mongoose.model('Comment',CommentSchema);
module.exports=Comment;