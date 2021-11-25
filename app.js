const { readFile, writeFile } = require("fs");
const _ = require("lodash");
const http = require("http");
const fs = require("fs");

var path = require("path");

const bodyParser = require("body-parser");

var express = require("express");
var app = express();
var PORT = 4000;

// View engine setup
// app.set('views', path.join(__dirname, './views'));
app.set("view engine", "ejs");

app.set("view engine", "hbs");

// const pop = path.join(__dirname, "./public");
// app.use(express.static(pop));

app.use(express.static("public"));

// Routes
// const newsRouter = require("./exam.js");
// const newsRouter2 = require("./routes2.js");

// app.use("/", newsRouter);

// app.use("/about", newsRouter2);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

require('./mongo.js');  //beacuse there localhost server '1227'
const user  = require('./users/user.js')  //user schema there'

app.post("/ja", (req, res) => {
  const user1 =new user(req.body)

  console.log(req.body)

user1.save(function(error, userDoc) {
if(error){
  res.status(404)
  res.send(error)
}

console.log(user1)
res.send(user1 );

 });



});



app.get('/ma',(req,res) =>{



user.find().then(function(error, userDoc) {
if(error){
   console.log(user  )

res.status(404).send(error);

}
 console.log(user  )

res.status(200).send(user);


 } )

})


app.get("/", (request, response) => {
       response.status(200).send("Hello there");
})



app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
