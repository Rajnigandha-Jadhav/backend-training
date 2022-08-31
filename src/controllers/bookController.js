const BookModel = require("../models/bookModel")
const AuthorModel= require ("../models/authorModel")

const bookCreate = async function(req,res){
  
    let authorID = req.body.author_id
  if(!authorID){
    return res.send("author id is mandatory")
  }
        let data= req.body
        console.log(req.body)
    
        let savedData= await BookModel.create(data)
        res.send({msg: savedData})
}
 const getBook = async function(req,res){
    let author= await AuthorModel.findOne({author_name:"Chetan Bhagat"})
   // console.log(author)
    let authorID = author.author_id
    let Data = await BookModel.find({author_id:authorID})
    
    
    res.send(Data)
 }

 const getAuthor = async function(req,res){
    let book = await BookModel.findOne({name:"Two states"})
    
    let authorID= book.author_id
    let Author = await AuthorModel.findOne({ author_id: authorID})
    let updateBook= await BookModel.findOneAndUpdate({name:"Two states"}, {$set:{price:100, new:true}})
    res.send({"updatedPrice":updateBook.price, "authorName":Author.author_name})

 }
 

const getPrice= async function(req,res){
    let books = await BookModel.find({price:{$gte:50, $lte:100}})
    
    let arr=[]
    books.map( item => {
        arr.push(item.author_id)
         })
         console.log(arr)
         

         let authors= await AuthorModel.find({author_id:{$in:arr}}).select({author_name:1, _id:0})
         res.send(authors)
        }


 //const getBookInYear= async function(req,res){
    
    
    //let bookYear= await BookModel.find({"price.indianPrice":{$in:["100INR", "200INR", "500INR"]}}).select({bookName:1, price:1, _id:0})
   // res.send({msg:bookYear})
 //}

 //const randomBooks = async function(req,res){
    //let savedData= await BookModel.find({$or:[{stockAvailable:true}, {totalPges:{$gt:500}}]}).select({bookName:1, totalPges:1, stockAvailable:1,_id:0})
    //res.send(savedData)
 //}


module.exports.bookCreate = bookCreate
module.exports.getBook=getBook
module.exports.getAuthor=getAuthor
module.exports.getPrice=getPrice
//module.exports.getBookInYear=getBookInYear
//module.exports.randomBooks=randomBooks
