const mongoose= require("mongoose")
const productDataModel= mongoose.Schema({
    
        
        name:String,
        category:String,
        price:Number  
    
})

module.exports= mongoose.model("ProductData", productDataModel)
