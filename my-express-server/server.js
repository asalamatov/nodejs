//jshint esversion:6

const express = require('express')

const app = express();

app.get("/", (request, response) => {
  //console.log(request);
  response.send("<body><h1 style={background-color: light-blue}>Hello World</h1></body>");
});

app.get("/contact", (req, res) => {
	res.send("Contact me at azamat.careers@gmail.com")
});

app.get("/about", (request, response) => {
	response.send("Azamat Salamatov - North American University");
});


app.listen(3000, () => {
  console.log("Server started on port 3000");
});

