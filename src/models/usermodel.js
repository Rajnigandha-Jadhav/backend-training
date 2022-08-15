const mongoose=require('mongoose');

const bookSchema= new mongoose.Schema({
bookName:{
    type:String,
    required:true
     },
authorName:String,
edition:{
    type:String,
    unique:true,
    required:true
},
category:String,
year:Number,
},{timestamps:true});
module.exports = mongoose.model('booklist', bookSchema)