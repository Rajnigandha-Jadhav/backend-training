const authenticationUserModel = require("../models/authenticationUserModel")
const JWT = require("jsonwebtoken")
jwtsecretkey = "Piyu"

const AuthenticatedUserCreate = async function (req, res) {
    let data = req.body
    let savedData = await authenticationUserModel.create(data)
    res.status(201).send(savedData)
}

const loginUser = async function (req, res) {
    try {
        let EmailID = req.body.emailId
        let Password = req.body.password

        let user = await authenticationUserModel.findOne({ emailId: EmailID, password: Password })
        if (!user) {
            return res.status(403).send("email and password not valid")
        }

        let token1 = JWT.sign({
            userID: user._id.toString()
        }, jwtsecretkey)

        res.send({ status: true, token: token1 })
    } catch (err) {
        return res.status(500).send({ msg: err.message })
    }
}


const getUserData = async function (req, res) {
    try {
        let userID = req.params.id
        //console.log(userID)
        let user = await authenticationUserModel.findById(userID)
        if (!user) {
            return res.status(404).send("user not found")
        }

        let Token = req.headers["x-auth-token"]
        if (!Token) {
            return res.status(400).send("header token is mandatory")
        }
        //console.log(Token)

        JWT.verify(Token, jwtsecretkey, function (err, valid) {
            if (err) {
                return res.status(400).send("invalid token")
            }
            if (valid) {
                if (valid.userID == userID) {
                    res.send(user)  // by-default its value is 200.
                } else {
                    return res.status(401).send({ msg: "unauthorized person" })
                }


            }
        })
    } catch (err) {
        return res.status(500).send({ msg: err.message })
    }
}

const updateUser= async function(req,res){
    try {
        let userID = req.params.id
        let user= await authenticationUserModel.findById(userID)
        if(!user){
            return res.status(404).send("user not found")
        }

        let Token= req.headers["x-auth-token"]
        if(!Token){
            return res.status(400).send("token is mandatory")
        }

        let valid= JWT.verify(Token, jwtsecretkey)
        if(valid.userID == userID){
            let updateUser = await authenticationUserModel.findOneAndUpdate({ _id:userID }, { $set: req.body }, { new: true })
            res.send(updateUser)
        }

      
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}


    
       



const deletedUser = async function (req, res) {
    let userID = req.params.id
    console.log(userID)
    let user = await authenticationUserModel.findById(userID)
    if (!user) {
        return res.send("user not found")
    }

    let Token = req.headers["x-auth-token"]
    if (!Token) {
        return res.send("header token is mandatory")
    }
    console.log(Token)

    JWT.verify(Token, jwtsecretkey, async function (err, valid) {
        if (err) {
            return res.send("invalid token")
        }
        if (valid) {
            let user = await authenticationUserModel.findOneAndUpdate({ _id: userID }, { $set: { isDeleted: true } }, { new: true })
            valid.userID == userID ? res.send(user) : res.send("unauthorized")



        }
    })



}

module.exports.AuthenticatedUserCreate = AuthenticatedUserCreate
module.exports.loginUser = loginUser
module.exports.getUserData = getUserData
module.exports.updateUser = updateUser
module.exports.deletedUser = deletedUser