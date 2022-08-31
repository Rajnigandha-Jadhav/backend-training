const AuthorModel= require("../models/authorModel")
const authorCreate = async function(req,res){
    
    let authorID = req.body.author_id
    if(!authorID){
        return res.send("author id is mandatory")
      }

    let data = req.body
    let savedData = await AuthorModel.create(data)
    res.send(savedData)
}


module.exports.authorCreate = authorCreate