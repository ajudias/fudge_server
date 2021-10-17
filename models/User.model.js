var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var UserSchema=new Schema(
    {
        name:String,
        image:String,
        posts: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }],
        comments: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }],
    },
    {
        timestamps:true
    }
)
const User=mongoose.model('User',UserSchema);
module.exports=User;