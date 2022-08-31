const mongoose= require("mongoose")
const authenticationUserModel= mongoose.Schema({
    
    firstName : String,
    lastName : String,
    mobile : Number,
    emailId : String,
    password : String,
    gender : String,
	isDeleted: {
        type:Boolean,
        default:false
    },
    age : Number,
    posts: {
        type: [],
        default: []
    }
    
})


module.exports= mongoose.model("AuthenticatedUser", authenticationUserModel)