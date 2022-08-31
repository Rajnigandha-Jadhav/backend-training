const productDataModel= require("../models/productDataModel")
const productDataCreate= async function(req,res){

    let data= req.body
    let savedData= await productDataModel.create(data)
    res.send(savedData)
}



module.exports.productDataCreate= productDataCreate