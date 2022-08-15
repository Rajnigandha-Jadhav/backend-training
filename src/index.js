const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://Rajnigandha-2402:LG1AyAT8nJB77pPC@cluster0.t7g9trm.mongodb.net/samraj123-DB?retryWrites=true&w=majority", 
{
    useNewUrlParser:true
})
.then(()=>console.log("mongodb is connected"))
.catch(err=>console.log("err"))
app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
