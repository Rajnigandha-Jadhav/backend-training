const publisherDataModel= require("../models/publisherDataModel")
const publisherCreate= async function(req,res){
    let data= req.body
    let savedData= await publisherDataModel.create(data)
    res.send(savedData)
}

module.exports.publisherCreate=publisherCreate