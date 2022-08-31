const mongoose = require("mongoose")
const AuthorModel = mongoose.Schema({
    
    author_id:Number,
    author_name:String,
    age:Number,
    address:String

})

module.exports= mongoose.model("Author", AuthorModel)