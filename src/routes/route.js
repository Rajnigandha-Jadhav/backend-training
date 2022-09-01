const express = require('express');
const router = express.Router();
const bookController = require("../controllers/bookController")
//const orderController=require("../controllers/orderController")
//const productController= require("../controllers/productController");
//const usercontroller= require('../controllers/userController');
const Middlewares=require('../middlewares/commonMiddlewares')
const authorController= require("../controllers/authorController")
const authorDataController=require("../controllers/authorDataController")
const publisherDataController=require("../controllers/publisherDataController")
const bookDataController= require("../controllers/bookDataController")
const productDataController= require("../controllers/productDataController")
const userDataController= require("../controllers/userDataController")
const orderDataController= require("../controllers/orderDataController")
const authenticationUserController= require("../controllers/authenticationUserController")
const authMiddleware= require("../middlewares/auth")
const authenticatedModel= require("../models/authenticationUserModel");
const authenticationUserModel = require('../models/authenticationUserModel');

const covid = require("../controllers/cowinController")



router.post("/createBook", bookController.bookCreate)
router.get("/getBook", bookController.getBook)
//router.post("/getYear",bookController.getBookInYear )
//router.get("/getRandom", bookController.randomBooks)
router.get("/getAuth", bookController.getAuthor)
//router.post("/createuser",MiddleC.middleware, usercontroller.createuser )
//router.post("/createOrder",MiddleC.middleware,orderController.createOrder )

//router.post("/createProduct", productController.createProduct  )
router.get("/getPrice", bookController.getPrice)
router.post("/authorCreate",authorDataController.authorCreate)
router.post("/publisherCreate", publisherDataController.publisherCreate)
router.post("/bookCreate", bookDataController.bookCreate)
router.get("/getAllBooks", bookDataController.getAllBooks)
router.put("/updateBookData", bookDataController.updateBookData)
router.get("/simpleAPI", function(req,res){
    res.send({msg:"dummy resp"})
})

router.post("/productData", productDataController.productDataCreate)
router.post("/userData", Middlewares.middleware,  userDataController.userDataCreate)
router.post("/orderData", Middlewares.middleware, orderDataController.orderDataCreate)
router.post("/authenticatedUser", authenticationUserController.AuthenticatedUserCreate)
router.post("/login", authenticationUserController.loginUser)
router.get("/getUserData/:id",  authenticationUserController.getUserData)
router.put("/updateUser/:id",  authenticationUserController.updateUser)
router.delete("/deletedUser/:id",  authenticationUserController.deletedUser)
router.get("/userData/:id", async(req,res) => {
    let userID = req.params.id
    let user= await authenticationUserModel.findById(userID)
    if(!user){
        return res.status(404).send("user not found")
    }
    res.send(user)
})


router.get("/getdistrict", covid.getDistrict)
router.get("/getWeather", covid.getLondonWeather)
router.get("/sort", covid.sortCities)
router.get("/meme", covid.Meme)


module.exports = router;