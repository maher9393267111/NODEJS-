// getting-started.js
const mongoose = require('mongoose');
const validator = require('validator')


  mongoose.connect('mongodb://localhost:27017/tala');






// //const validator = require('validator')
// const kittySchema = new mongoose.Schema({
//   name: String,
//   age:Number,
// email:{
// type:String,
// validate(value){

// if(!validator.isEmail(value)){

// throw new Error('itis not email schema sorry ')

// }


// }




// }

// });

// const Kedi = mongoose.model('Kedi', kittySchema);

// const silence = new Kedi({ name: 'maotaaaz',age:11, email:'motaazg@gmail.com' });
// console.log(silence.name, silence.age); // 'Silence'


// silence.save.then(()=> {
// console.log(silence)

// } )


// silence.save(function(error, userDoc) {
// console.log(silence)

// });

