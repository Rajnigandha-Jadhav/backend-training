const mongoose= require("mongoose")
const orderDataModel= mongoose.Schema({
    
	userId: String,
	productId: String,
	amount: Number,
	isFreeAppUser: {
        type:Boolean,
        default:false
    },
	date: String
})

module.exports= mongoose.model("OrderData", orderDataModel)