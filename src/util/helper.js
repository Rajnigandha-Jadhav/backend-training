const printDate = function() {
    let today = new Date();

    let date = today.getDate();

    console.log("Today is: "+ date);

}

const printMonth = function() {
    let currentDate = new Date()
    let currentMonth = currentDate.getMonth()
    currentMonth = currentMonth + 1

    console.log('The current months is: ' + currentMonth)
}

const getBatchInfo = function() {
    console.log('Plutonium, W4D1, the topic for today is Nodejs')
}

module.exports.getTodaysDate = printDate
module.exports.getCurrentMonth = printMonth
module.exports.printBatchDetails = getBatchInfo