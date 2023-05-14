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
    https.get(`https://kuran.kz/images/medine750/${pageNo}.jpg`, () => res.send(` <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"> <div class="bg-info"> <img class="rounded mx-auto my-auto m-1 d-block" style="width:800px" src ="https://kuran.kz/images/medine750/${pageNo}.jpg" ></div>`))

});



app.listen(3000, ()=> console.log("Server is running on port 3000"))
