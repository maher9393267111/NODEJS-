 var mongoose = require('mongoose');
const validator = require('validator')

 //var db = mongoose.connect('mongodb://localhost/myApp');
 require('../mongo.js');

 const User = require('./user.js');




// Find a document whose

// Updating name field of this user_id to name='Gourav'
var user_id = '619fe64a6e75167e5e9dfae3';
User.findByIdAndUpdate(user_id, { name: 'Gouravvv' },
							function (err, docs) {
	if (err){
		console.log(err)
	}
	else{
		console.log("Updated User : ", docs);
	}
});



User.findByIdAndRemove(user_id, { name: 'Gouravvv' },
							function (err, docs) {
	if (err){
		console.log(err)
	}
	else{
		console.log("Updated User : ", docs);
	}
});

