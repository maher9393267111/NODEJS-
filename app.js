
const { readFile, writeFile } = require('fs')
const _ = require('lodash');
const http = require('http')
const fs = require('fs')


var path = require('path');


const bodyParser = require('body-parser')


var express = require('express');
var app = express();
var PORT = 3000;

// View engine setup
app.set('view engine', 'ejs');


// Without middleware
app.get('/', function(req, res){

	// Rendering home.ejs page
	res.render('indo');
})



// Without middleware
app.get('/about', function(req, res){


    var fileName = 'index.html';
    res.sendFile('C:/Users/MMM/Desktop/32/serve/views/index.html')

    });

// Routes
const newsRouter = require('./exam.js')


app.use('/article', newsRouter)







app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
















//configure app
// app.use('/static', express.static('public'))
// app.set('view engine', 'html');
// app.set('views', path.join(__dirname, 'views'));

// app.get('/', function (req, res) {
//     res.render('index');
// });


// app.listen(3000, function() {
//     console.log('Ready on port 1337');
// });



















// http.createServer(function (req, res) {
//  if (req.url ==='/')
//   res.end('itis home page here');
// else if ( req.url === '/about'){
// res.end('itis about page here');

// }

// }).listen(8080);




