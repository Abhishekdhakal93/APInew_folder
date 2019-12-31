require('../Mongoose/mongoose');
const mongoose = require('mongoose');
const ImageSchema = new mongoose.Schema({
    imageupload:{
        type: String
    }
})
const Image= mongoose.model('Image',ImageSchema)//saves image 
    

    module.exports = Image ;