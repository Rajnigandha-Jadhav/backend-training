const mongoose= require("mongoose")
const ObjectId= mongoose.Schema.Types.ObjectId
const bookModel= mongoose.Schema({

    
		
        name:String,
        author:{
            type:ObjectId,
            ref:'AuthorData'  //information of author from AuthorData collection present in our database.
        },
        price:Number,
        ratings:Number,
        publisher: {
            type:ObjectId,
            ref:'PublisherData'  //information of publisher from PublisherData collection present in our database.
        },
        isHardCover:{
            type:Boolean,
            default:false
        }

})



module.exports= mongoose.model("BookData", bookModel)