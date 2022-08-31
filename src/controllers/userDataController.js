const userDataModel= require("../models/userDataModel")
const userDataCreate= async function(req,res){
     let userHeader= req.headers.isfreeappuser
      req.body["isFreeAppUser"]= userHeader  //syntax for adding key and its value in an object.
      let data= req.body
    let savedData= await userDataModel.create(data)
    res.send(savedData)
}


module.exports.userDataCreate= userDataCreate