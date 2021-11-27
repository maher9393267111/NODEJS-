var express = require('express');
const router = express.Router()
const user  = require('./users/user.js')
const user33  = require('./users/user3.js')
require('./mongo.js');


router.get('/contact',(req,res)=>{

res.render('./sections/indo.ejs')


})



router.post('/contact',(req,res)=>{

const user5 =new user(req.body)


    user5.save(function(err) {
        if(err) {
            console.log(err);
            res.status(400);
            res.send(err);
        }
        else {
               let {name,age ,email } = req.body
            let data = {
        'name': name,
        'age': age,
        'email': email
    }
    res.render('./sections/contactsuc.ejs', {data})
        }

})




})


router.post("/jaja", (req, res) => {
  const user2 =new user(req.body)

  console.log(req.body)

user2.save(function(error, userDoc) {
if(error){
  res.status(404)
  res.send(error)
}

console.log(user2)
res.send(user2 );

 });



});

//router.use(router)
router.get('/pepe',(req,res)=>{

res.render('./sections/indo.ejs')

})

router.get('/ramos',(req,res)=>{

res.send('itis ramos page')

})




router.get('/ma',(req,res) =>{



user.find().then(function(error, userDoc) {
if(error){
   console.log(user  )


res.status(404).send(error);

}
//conole.log(req.params)
 console.log(user  )

res.status(200).send(user);


 } )

})


router.get("/", (request, response) => {
       response.status(200).send("Hello there");
})








router.get('/ma/:id',(req,res) =>{

const _id = req.params.id


user.findById(_id).then(function(error, userDoc) {
if(error){
   console.log(!user  )


res.status(404).send(error);

}
//conole.log(req.params)
 console.log(user  )

res.status(200).send(user);


 } )

})


router.post("/far", async(req, res) => {

 const user2 =  new user(req.body)

try{

 await user2.save()
  res.status(201).send(user2);

} catch(error){
   res.status(401).send(error);

}


 });

// app.patch('/users/:id')

router.get('/user/:id',(req,res)=>{
 const user2 =  new user(req.body.email)
res.send(user2)

})


router.patch('/user/:id', async(req,res) =>{
try{
  const user3 = await user.findByIdAndUpdate(req.params.id, req.body, {new:true,runValidators:true })

if(!user3){
return res.status(404).send()


}
res.send(user3)
}
catch(e){
return res.status(400).send(e)


}


 }


 )






router.get('/man', (req, res) => {

 res.render('sections/indo.ejs');



} )




module.exports = router




router.post("/pass", (req, res) => {
  const user2 =new user33(req.body)

  console.log(req.body)

user2.save(function(error, userDoc) {
if(error){
  res.status(404)
  res.send(error)
}

console.log(user2)
res.send(user2 );

 });



});





