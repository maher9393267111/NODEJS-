// const EventEmitter = require("events");
// const eventEmitter = new EventEmitter();
// const readline = require("readline");
// const express = require("express");
// const app = express();
 const fs =require('fs')
const path = require('path');
const url = require('url');
const http = require('http');
const assert = require('assert').strict;

 const hostname = '127.0.0.1';
 const port = 8000;

const server = http.createServer((req, res) => {
fs.readFile('index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});








 server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
 });





















// // Shortened for readability
// let filepath = ' C:/Users/MMM/Desktop/32/serve/src/subfile/mahergo.jpg';

// let imageName = path.basename(filepath,'jpg');

// console.log('name of image:', imageName);
// // name of image: bob_smith.png


// let directoryOfFile = path.dirname(filepath);

// console.log('name of directory:', directoryOfFile);

// let imageTypes = ['.png', '.jpg', '.jpeg'];



// function isImage(filepath){

// let filltype =path.extname(filepath);

// if(imageTypes.includes(filltype)) {
// return true



// }
// else{

// return false

// }




// }


//   isImage('mahergo.png'); // true
// const imo= isImage('mahergo.exe'); // false
// const ima= isImage('./subfile/mahergo.jpg'); // true

// console.log(imo)



// console.log('hhhuy')



// Requiring the module




// Function call
// try {
// 	assert.strictEqual(22, 2, new
// 	TypeError('111111Inputs are not same'));
// } catch(error) {
// 	console.log("Errrrrrrrrrror Occured: ", error)
// }


