const express = require('express');
const _ = require('underscore');
const lodash = require('lodash');
const router = express.Router(); 
const app = express();

/*const abc = require('../introduction/intro')
const loggerModule = require('../logger/logger.js')
const formatterModule = require('../validator/formatter') 
const helperModule = require('../util/helper')
 

router.get('/piyusha', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    loggerModule.printInfo()
    formatterModule.trimMyString()
    formatterModule.getUpperCaseString()
    formatterModule.changetoLowerCase()
    helperModule.getTodaysDate()
    helperModule.getCurrentMonth()
    helperModule.printBatchDetails()
    let weekdend = ['Saturday','Sunday','Monday']
    let result = _.first(weekdend, 2)
    console.log('Unserscore example resultr is ',result)
    res.send('My name is rajnigandha')
}); */

router.get('/test-me', function(req, res){
    const months=['jan','fab','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
    let result=lodash.chunk(months,3)
    //res.send(result);
    console.log(result);
    const array=[1,3,5,7,9,11,13,15,17,19]
      let tail=lodash.tail(array)
    console.log(tail)
    //res.send(tail)
   const duplicate=[[1,2,3,4,5],[2,7,3,8,9],[9,0,4,2,3],[1,3,2,5,10],[1,34,2,5,11]]
   const [a,b,c,d,e]=duplicate
   let sam=lodash.union(a,b,c,d,e)
   console.log(sam)
  // res.send(sam)
    const oarray=[['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
   let object=lodash.fromPairs(oarray)
   console.log(object)
    res.send(object)
})



router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason

app.get('/sol1',function(req, res){
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
  module.exports=app;