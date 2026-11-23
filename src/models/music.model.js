const mongoose = require('mongoose'); 

const musicSchema  = new mongoose.Schema({
    uri: {
        type:String, 
        required:true, 
    }, 
    title:{
        type:String, 
        required:true,
    }, 
    artiest:{
        type:mongoose.Schema.Types.ObjectId, 
        ref:"user", 
        required:true, 
    }
})

const musincModel = mongoose.model("music", musincSchema)

module.exports = musicSchema; 