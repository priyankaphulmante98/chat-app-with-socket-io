const mongoose =  require('mogoose')


const chatModel = new mongoose.Schema({
    chatName:{
        type:String,
        trim:true,
    },

    isGroupChat:{
        type:Boolean,
        default:false
    },

    users:[{
        type:mongoose.Schema.Types.ObjectId,
    }],

    latestMessage:{
        type:mongoose.Schema.Types.ObjectId,
       ref:"Message",   
     },

    groupAdmin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
     }, 
},{timestamps:true}

);

const Chat = mongoose.model("Chat", chatModel);
module.exports(Chat)