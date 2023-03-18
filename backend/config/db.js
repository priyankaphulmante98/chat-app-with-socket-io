const mongoose = require('mongoose');

const connectDB = async() => {
    try {
       await mongoose.connect('mongodb://0.0.0.0:27017/chat', {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:true,
        });

        console.log('mongoDB Connect')
        
    } catch (error) {
        console.log('Error');
      
    }
}

module.exports = connectDB;