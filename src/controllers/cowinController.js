const axios = require("axios")

const getDistrict = async function (req, res) {
    try {
        let DistrictId = req.query.district_id
        let Date = req.query.date
        let Option = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${DistrictId}&date=${Date}`
        }
        let result = await axios(Option)
        res.status(200).send(result.data)
    }
    catch (err) {
        return res.status(500).send({ msg: err.message })
    }
}


const getLondonWeather = async function (req, res) {
    try {
        let City = req.query.q
        let AppID = req.query.appid
        let Option = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${AppID}`
        }
        let result = await axios(Option)
        res.status(200).send({ temperature: result.data.main.temp })
    }
    catch (err) {
        return res.status(500).send({ msg: err.message })
    }
}

//let Cities =  [ "Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]

let sortCities = async function (req, res) {

    let Cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
    let arr = []
    for (let i = 0; i < Cities.length; i++) {
        let obj = {}
        obj["city"] = Cities[i]
        let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${Cities[i]}&appid=2e76985ee54a878628e7dd2f8e3dc14a`)
        obj["temp"] = result.data.main.temp
        // {city : "Benglore", temp: 297}
        arr.push(obj)
    }
    arr.sort((element1, element2) => {
        return element1.temp - element2.temp
    })
    res.send(arr)
}


const Meme = async function (req, res) {
    try {
        let template_id = req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let username = req.query.username
        let password = req.query.password

        let Option = {
            method: "get",
            url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }
        let result = await axios(Option)
        res.status(200).send(result.data)
    }
    catch (err) {
        return res.status(500).send({ msg: err.message })
    }
}



module.exports.getDistrict = getDistrict
module.exports.getLondonWeather = getLondonWeather
module.exports.sortCities = sortCities
module.exports.Meme = Meme