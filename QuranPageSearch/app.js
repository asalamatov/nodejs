const express = require("express");
const https = require("https");
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/index.html")
})


app.post("/", (req, res)=> {
    pageNo = req.body.pageNumber;
    https.get(`https://kuran.kz/images/medine750/${pageNo}.jpg`, () => res.send(`<img style="width: 70%" src ="https://kuran.kz/images/medine750/${pageNo}.jpg" >`))

});



app.listen(3000, ()=> console.log("Server is running on port 3000"))
