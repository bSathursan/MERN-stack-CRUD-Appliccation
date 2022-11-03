const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    // id:{
    //     type:String,
    //     required:true
    // },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
});

module.exports = mongoose.model('Posts',postSchema);