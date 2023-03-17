const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    pic:{
        type:String,
        required:true,
        default:'https://avatars.githubusercontent.com/u/103947245?v=4'
    },

},{timeStamps:true}
);

const User = mongoose.model('User', userSchema);

module.exports = User;

