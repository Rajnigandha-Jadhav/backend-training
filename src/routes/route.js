const express = require('express');
const router = express.Router();
//const app = express();

/*app.get('/sol1',function(req, res){
    const array=[1,2,3,5,6,7]
    let sum=0
    for (i=0;i<array.length;i++){
      sum =sum+array[i]
    }
    const n=array.length+1
    //console.log(n)
    const missingNumber=((n*(n+1))/2)-sum//formula is (sumOfTheValueOfAnArray =(n*(n+1)/2)-missingvalue)
    res.send({ data: missingNumber  }  )
  
  })
  app.get('/sol2',function(req, res){
    const array=[33,34,35,37,38]
    let sum=0
    for (i=0;i<array.length;i++){
      sum =sum +array[i]
    }
    const n=array.length+1
    const fast=array.shift()
    const last=array.pop()
    const missingNumber=((n*(last+fast))/2)-sum
    console.log(missingNumber)
    res.send({ data: missingNumber  }  )
  
  })
  module.exports=app;*/
/*let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]}
          ]
  
   router.post('/players', function (req, res) {
    let ele= req.body
  for(i=0;i<players.length;i++){
    let object=players[i]
    if(object.name==ele.name){
     return res.send("This player is exist")
    }
  }
    players.push(ele)
    res.send(  { data: players , status: true }  )
})*/



let persons =[
    {
        name: "PK",
        age: 10,
        votingStatus: false
        
    },
    {
        name: "SK",
        age: 20,
        votingStatus: false
        
    },
    {
        name: "AA",
        age: 70,
        votingStatus: false
        
    },
    {
        name: "SC",
        age: 5,
        votingStatus: false
        
    },
    {
        name: "HO",
        age: 40,
        votingStatus: false
        
    },
    {
        name: "raj",
        age: 18,
        votingStatus: false
        
    }
]
router.post('/person',function(req,res){
        let votingage=req.query.age
        let newperson=persons.filter(ele=>{if(ele.age>=votingage){
            return ele.votingStatus=true
        }})
        
console.log(newperson)
res.send(newperson)

}) 
module.exports = router;




