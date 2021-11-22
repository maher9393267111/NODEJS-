
const { readFile, writeFile } = require('fs')
const _ = require('lodash');
const http = require('http')

//create a server object:
http.createServer(function (req, res) {
 if (req.url ==='/')
  res.end('itis home page here');
else if ( req.url === '/about'){
res.end('itis about page here');

}

}).listen(8080); //the server object listens on port 8080


const items = [ 1, [2, [3,[4]]]];


const newitems = _.flattenDeep(items)






console.log(newitems[3])