var express = require('express');
const router = express.Router()
const user  = require('./users/user.js')
const user33  = require('./users/user3.js')
require('./mongo.js');
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// var express = require("express");
// var app = express();



// router.post('/contact',(req,res)=>{

// //const name =req.body.name
// res.render('./sections/indo.ejs',{nam:req.body.orfa })


// })




module.exports = router

















