const mongoose= require("mongoose")
const publisherModel= mongoose.Schema({
    
name: String,
headQuarter:String

})

module.exports= mongoose.model("PublisherData", publisherModel)