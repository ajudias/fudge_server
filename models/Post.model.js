var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var PostSchema=new Schema(
    {
        title:String,
        body:String,
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        comments:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }]
    },
    {
        timestamps:true
    }
)
const Post=mongoose.model('Post',PostSchema);
module.exports=Post;