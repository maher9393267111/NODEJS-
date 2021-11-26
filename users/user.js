
const mongoose = require('mongoose');
const validator = require('validator')



//const validator = require('validator')
const kittySchema = new mongoose.Schema({
  name: String,
  age:Number,
email:{
type:String,
validate(value){

if(!validator.isEmail(value)){

throw new Error('itis not email schema sorry ')

}


}




}

});
const Kedi = mongoose.model('Kedi', kittySchema);


 module.exports = mongoose.model('kedi', kittySchema);;

