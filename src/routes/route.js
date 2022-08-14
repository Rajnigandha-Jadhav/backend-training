const express = require('express');
const router = express.Router();
const mumma = require('../Hindavi/hindavi.js')
const mumma1 = require('../Rudra/rudra.js')


router.get('/test-me', function (req, res){
    
    mumma.welcome()
    console.log(mumma.rahul)
    console.log(mumma1.sarthak)
    
    
    console.log("Sameer");
    res.send("This is my firstever API")

});





module.exports = router;
