const BookData= require("../models/bookDataModel")
const authorData= require("../models/authorData")
const PublisherData=require("../models/publisherDataModel")
const bookCreate= async function(req,res){
    
    let AuthorID= req.body.author
    if(!AuthorID){
        return res.send("id is required")
    }
    let author= await authorData.findById(AuthorID)
    if(!author){
        return res.send("no document found on given id")
    }

    let PublisherID= req.body.publisher
    if(!PublisherID){
        return res.send("publisher id is required")
     }

     let publisher = await PublisherData.findById(PublisherID)
     if(!publisher){
        return res.send("publisher not found from given id")
     }


     let data = req.body
     let savedData= await BookData.create(data)
     res.send(savedData)

}


const getAllBooks= async function(req,res){
    let savedData= await BookData.find().populate('author publisher')  //fetches all data which we have mentioned in schema.
    res.send(savedData)
    console.log(savedData)
}

const updateBookData= async function(req,res){
    let publishers= await PublisherData.find({name:{$in:["Penguin", "HarperCollins"]}})
    let arr = []
    publishers.map(item => {
        arr.push(item._id)
    })
    //console.log(arr)

    let books= await BookData.find({publisher:{$in:arr}}).populate('publisher')
    let booksUpdate= await BookData.updateMany(  {publisher:{$in:arr}} ,  {$set:{isHardCover:true}} )
    
    let authors= await authorData.find({rating:{$gt:3.5}})
   

    let arr1= []
    authors.map(item => {
        arr1.push(item._id)
    })
    console.log(arr1)

    let authorBooks= await BookData.find( {author:{$in:arr1}} ).populate('author')
    let authorBooksUpdate = await BookData.updateMany( {author:{$in:arr1}}, {$inc: {price:10}} )

    res.send(authorBooks)
    




}






module.exports.bookCreate=bookCreate
module.exports.getAllBooks=getAllBooks
module.exports.updateBookData=updateBookData