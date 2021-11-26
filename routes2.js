var express = require('express');
const newsRouter2 = express.Router();



newsRouter2.get('/', (req, res) => {

 res.render('sections/index2.ejs');



} )


module.exports = newsRouter2