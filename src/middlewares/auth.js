const checkHeader= async function(req,res,next){
    let Token = req.headers["x-auth-token"]
    if(!Token){
        return res.send("header is mandatory")
    }else{
        next()
    }
    // let UserID= req.params.id 
    // if(!UserID){
    //     return res.send("user is mandatory")
    // }else{
    //     next()
    // }
}


module.exports.checkHeader= checkHeader
