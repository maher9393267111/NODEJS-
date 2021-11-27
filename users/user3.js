
const mongoose = require('mongoose');
const validator = require('validator')
require('../mongo.js');
  //mongoose.connect('mongodb://localhost:27017/password-example');

//const validator = require('validator')
const kaka = new mongoose.Schema({
  name: String,
  age:Number,
  password:Number,
email:{
type:String,
validate(value){

if(!validator.isEmail(value)){

throw new Error('itis not email schema sorry ')

}


}




}

});
const password = mongoose.model('pass', kaka);


 module.exports = mongoose.model('pass', kaka);;

