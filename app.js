const { readFile, writeFile } = require("fs");
const _ = require("lodash");
const http = require("http");
const fs = require("fs");

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

// app.post("/jaja", (req, res) => {
//   const user2 =new user(req.body)

//   console.log(req.body)

// user2.save(function(error, userDoc) {
// if(error){
//   res.status(404)
//   res.send(error)
// }

// console.log(user2)
// res.send(user2 );

//  });



// });

// app.use(router)
// router.get('/pepe',(req,res)=>{

// res.send('hello pepe')

// })



// app.get('/ma',(req,res) =>{



// user.find().then(function(error, userDoc) {
// if(error){
//    console.log(user  )


// res.status(404).send(error);

// }
// //conole.log(req.params)
//  console.log(user  )

// res.status(200).send(user);


//  } )

// })


// app.get("/", (request, response) => {
//        response.status(200).send("Hello there");
// })








// app.get('/ma/:id',(req,res) =>{

// const _id = req.params.id


// user.findById(_id).then(function(error, userDoc) {
// if(error){
//    console.log(!user  )


// res.status(404).send(error);

// }
// //conole.log(req.params)
//  console.log(user  )

// res.status(200).send(user);


//  } )

// })


// app.post("/far", async(req, res) => {

//  const user2 =  new user(req.body)

// try{

//  await user2.save()
//   res.status(201).send(user2);

// } catch(error){
//    res.status(401).send(error);

// }


//  });

// // app.patch('/users/:id')

// app.get('/user/:id',(req,res)=>{
//  const user2 =  new user(req.body.email)
// res.send(user2)

// })


//  app.patch('/user/:id', async(req,res) =>{
// try{
//   const user3 = await user.findByIdAndUpdate(req.params.id, req.body, {new:true,runValidators:true })

// if(!user3){
// return res.status(404).send()


// }
// res.send(user3)
// }
// catch(e){
// return res.status(400).send(e)


// }


//  }


//  )







app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});













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