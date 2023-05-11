/*//jshint exversion:6

const express = require("express");
const https =   require("https");
const app = express();

app.get("/", (req, res)=>{
  const url = "https://api.openweathermap.org/data/2.5/weather?q=Houston&appid=29a54c8004addffb96d05ad04eea647b&units=imperial"
  https.get(url, (response)=>{
    console.log(response.statusCode)
    response.on('data', (data)=>{
      const weatherData = JSON.parse(data)
      const temp = weatherData.main.feels_like
      const weatherDescription = weatherData.weather[0]['description']
      console.log(temp) 
      console.log(weatherDescription)
    })
  })
  
  res.send("Server is up and running!");
})




app.listen(3000, ()=> console.log("Server is running on port 3000."))

*/























//jshint esversion:6
const express = require("express");
const https = require("https");
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({extended:true}))


app.get("/", (request, response) =>{
  response.sendFile(__dirname + "/index.html")
  // let query = "Houston"
  // const url = `https://api.openweathermap.org/data/2.5/weather?appid=29a54c8004addffb96d05ad04eea647b&q=${query}&units=imperial`
  // https.get(url, (res)=> {
  //   //console.log(res);
  //   res.on("data", data => {
  //     const weatherData = JSON.parse(data);
  //     const temp = weatherData.main.temp
  //     const weatherDesc = weatherData.weather[0]['description'];
  //     console.log(weatherDesc)
  //     response.write("<h1>it is " + weatherDesc + " and the temp is " + temp +  ` in ${query}`);
  //     const iconCode = weatherData.weather[0]['icon']
  //     const icon = `http://openweathermap.org/img/wn/${iconCode}@2x.png`
  //     response.write(`<br><img src='${icon}'>`);
  //     response.send();
  //   })
  // })
})

app.post("/", (request, response)=> {
  var query = request.body.cityName
  console.log(query);
  const url = `https://api.openweathermap.org/data/2.5/weather?appid=29a54c8004addffb96d05ad04eea647b&q=${query}&units=imperial`
  https.get(url, (res)=> {
    //console.log(res);
    res.on("data", data => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp
      const weatherDesc = weatherData.weather[0]['description'];
      console.log(weatherDesc)
      response.write(`<head><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></head><body><div class="container"><h1 class="text-center" style="margin-top: 35%">The weather is currently ` + weatherDesc + " and the temperature is " + temp +  `&#8457; in ${query}.`);
      const iconCode = weatherData.weather[0]['icon']
      const icon = `http://openweathermap.org/img/wn/${iconCode}@2x.png`
      response.write(`<br><img style="width: 200px" src='${icon}'>`);
      response.send();
    })
  })
})





app.listen(3000, () => console.log("Server running on port 3000"));














































