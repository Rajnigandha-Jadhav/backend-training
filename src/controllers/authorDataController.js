const authorData = require("../models/authorData")
const AuthorData= require("../models/authorData")
const authorCreate = async function(req,res){
    let data= req.body
    let savedData= await authorData.create(data)
    res.send(savedData)

}


module.exports.authorCreate=authorCreate