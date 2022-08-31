const mongoose = require("mongoose")
const bookModel = mongoose.Schema({
    name:String,
    author_id:Number,
    price:Number,
    ratings:Number

})

module.exports= mongoose.model("MyBook", bookModel)