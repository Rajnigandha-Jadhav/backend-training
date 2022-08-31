const mongoose= require("mongoose")
const userDataModel= mongoose.Schema({
    
    name: String,
	balance:Number, 
	address:String,
	age: Number,
 	gender: String, 
	isFreeAppUser: {
       type:Boolean,
       default:false
    } 
})


module.exports= mongoose.model("UserData", userDataModel)