var express = require('express');
const newsRouter2 = express.Router();
const mongoose = require('mongoose');
const url = require('./mongo')
const user = '../users/user'
newsRouter2 .use(express.json());
newsRouter2 .use(express.urlencoded({ extended: true }));
const bodyParser = require("body-parser");

newsRouter2.get('/', (req, res) => {

 res.render('sections/indo.ejs');



} )

newsRouter2.get('/pra', (req, res) => {

 res.send('hell maher bey');



} )







module.exports = newsRouter2