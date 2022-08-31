const orderDataModel= require("../models/orderDataModel")
const userDataModel= require("../models/userDataModel")
const productDataModel= require("../models/productDataModel")

const orderDataCreate= async function(req,res){
    let orderHeader= req.headers.isfreeappuser
    let UserID= req.body.userId
    let user= await userDataModel.findById(UserID)
    if(!user){
        return res.send("user not found")
    }

    let ProductID= req.body.productId
    let product= await productDataModel.findById(ProductID)
    if(!product){
        return res.send("product not found")
    }

    if(orderHeader == 'true'){
        req.body["amount"] = 0
        req.body["isFreeAppUser"] = orderHeader
        let data= req.body
        let savedData= await orderDataModel.create(data)
        res.send(savedData)
    }else if(orderHeader == 'false'){
        let user= await userDataModel.findById(UserID)
        let product= await productDataModel.findById(ProductID)
        if(user.balance > product.price){
            let remaining = user.balance - product.price
            req.body["amount"]= product.price
            req.body["isFreeAppUser"]= orderHeader
            let data = req.body
            let savedData= await orderDataModel.create(data)
            await userDataModel.updateOne({_id:UserID}, {$set:{balance:remaining}})
            res.send(savedData)
          }else{
            return res.send("not sufficient balance")
          }
    }




    res.send("dummy resp")
}


module.exports.orderDataCreate=orderDataCreate