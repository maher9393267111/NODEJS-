const { readFile, writeFile } = require("fs");
const _ = require("lodash");
const http = require("http");
const fs = require("fs");
 const bcrypt = require("bcrypt");
var path = require("path");

const bodyParser = require("body-parser");

var express = require("express");
var app = express();
var router = new express.Router();


var PORT = 4000;

// View engine setup
 app.set('views', path.join(__dirname, './views'));
app.set("view engine", "ejs");

app.set("view engine", "hbs");



app.use(express.static("public"));



app.use(express.json());
app.use(express.urlencoded({ extended: true }));



require('./mongo.js');  //beacuse there localhost server '1227'
const user  = require('./users/user.js')  //user schema there'








app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});






const mypass = async ()=>{


const password ="black1234567";
const hashpass = await   bcrypt.hash(password,8);

console.log(hashpass)
console.log(password)


}

mypass()









//EXAMPLES PLACE
// var obj;
// fs.readFile("./jasos.json", "utf8", function (err, data) {
//   if (err) throw err;
//   obj = JSON.parse(data);
//   console.log(obj);
// });

// app.get("/jasos", (req, res) => {
//   res.send(obj);
// });

//EXAMPLES PLACE end



// Routes
 const router1 = require("./exam.js");


 app.use( router1);


// Routes END



//const newsRouter2 = require("./routes2.js");
 //app.use("/about", newsRouter2);




  const pop = path.join(__dirname, "./public");
  app.use(express.static(pop));