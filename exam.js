var express = require('express');
const newsRouter = express.Router()

newsRouter.get('', async(req, res) => {

 res.sendFile('C:/Users/MMM/Desktop/32/serve/views/articles.html');



} )


module.exports = newsRouter