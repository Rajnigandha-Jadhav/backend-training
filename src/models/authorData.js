const mongoose= require("mongoose")
const authorData= mongoose.Schema({
    
    
    authorName:String,
    age:Number,
    address:String,
    rating:Number

})
    
    

module.exports= mongoose.model("AuthorData", authorData)