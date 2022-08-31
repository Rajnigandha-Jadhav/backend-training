const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//let today= new Date() 
//app.use(function(req, res, next) {
   // console.log(today.getFullYear(), "-", today.getMonth()+1, "-", today.getDate(), "  ", today.getHours(), ":", today.getMinutes(), ":", today.getSeconds(), req.socket.localAddress, req.originalUrl)
    //next()
//})

mongoose.connect("mongodb+srv://Rajnigandha-2402:LG1AyAT8nJB77pPC@cluster0.t7g9trm.mongodb.net/Piyusha-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


 


app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
