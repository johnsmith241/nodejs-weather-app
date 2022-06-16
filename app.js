const request=require('request')
const geocode=require('./utils/geocode.js')
const forecast=require('./utils/forecast.js')
// const url='http://api.weatherstack.com/current?access_key=35b80be133e8137740b2ff753bc2ea69&query=37.8267,-122.4233&units=f'

// request({url: url, json:true}, (error,response) => {
//     // const data=JSON.parse(response.body)
//     // console.log(data.current)

//     // console.log(response.body.current.temperature)
//     // console.log(response.body.current.feelslike)
//     if(error){
//      console.log("Unable to connect to weather service")
//     }else if(response.body.error){
//   console.log("Unable to find location")
//     }else{
//         console.log(response.body.current.weather_descriptions[0] + " .It is currently " + response.body.current.temperature + " degrees outside. But it feels like " + 
//         response.body.current.feelslike + " degrees." )
//     }

// })


// const geourl='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2lkLXNobmthciIsImEiOiJjbDNvbXphaG0wbjF6M2xzNmFmZWUwa2J4In0.b3Sj908CncEbUBBAvR-ndQ&limit=1'

// request({url: geourl, json: true}, (error,response) => {
//     // const data=JSON.parse(response.body)
//     if(error){
// console.log("Unable to connect to geocoding service")
//     }else if(response.body.features.length == 0){
//   console.log("Unable to find location")
//     }else{
//         console.log("Latitude : " + response.body.features[0].center[0] + "   Longitude: " + response.body.features[0].center[1])
//     }

// })


const address=process.argv[2]

if(!address){
    console.log("You have not entered any location")
}else{

    geocode(address, (error,{longitude, latitude, location} = {}) => {
        if(error){
            return console.log(error)
        }
    
        forecast(latitude, longitude, (error,{description, temperature, feelslike} = {}) => {
            if(error){
                return console.log(error)
            }
    
            console.log(location)
            //console.log(forecastData)
            console.log(description + " .It is currently " + temperature  + " degrees outside. But it feels like " + feelslike + " degrees." )
            
        })
    
    })
    
}
