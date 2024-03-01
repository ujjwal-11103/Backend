var express = require('express');
var router = express.Router();
const userModel = require('./users');
const session = require('express-session');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// // CREATE
// router.get('/create', async function (req, res) {
//   let createdUser = await userModel.create({
//     username: "Ujjwal",
//     password: 1234,
//     age: 21
//   })
//   console.log("User Created");
//   res.send(createdUser)
// })

// // Finding user 
// // It prints all the user present
// router.get('/find', async function (req, res) {
//   let User = await userModel.find()
//   res.send(User)
//   console.log("User Found");
// })

// // Finding particular user 
// router.get('/findone', async function (req, res) {
//   let OneUser = await userModel.find({
//     username: "Ujjwal",
//   })
//   res.send(OneUser)
// })

// // DELETE
// router.get('/delete', async function (req, res) {
//   let DeleteUser = await userModel.findOneAndDelete({
//     username: "Ujjwal",
//   })

//   console.log(DeleteUser);
//   if (DeleteUser == null) {
//     res.send("All deleted");
//   }
//   res.send(DeleteUser)
// })



// // Sessions 
// router.get('/session', function (req, res) {
//   req.session.sessionName = true;
//   res.send("Session create hogya with sessionName and value GoTO /check")
// });
// // ye sirf mere browser me hua hai or isko dusre route me bhi access kr skte hai


// router.get('/check', function (req, res) {
//   console.log(req.session);
//   res.send("check console")
// })

// // deleting session
// router.get('/remove', function (req, res) {
//   req.session.destroy(function (err) {
//     if (err) throw err;
//     console.log("Removed session");
//     res.send("Removed Session Successfully")
//   })
// })

//COOKIES

// create
router.get('/cookie', function (req, res) {
  res.cookie("age", 25).send("Cookie created")
});

// read
router.get('/read', function (req, res) {
  res.send('Cookies-Read = ' + req.cookies.age)  //idhr server ke pas se read krega or serer ko req milta ha as an input
  console.log(req.cookies.age);             //server ke pas boht cookie honge isliye cookies     's'
});

// delete
router.get('/delete', function (req, res) {
  console.log(res.clearCookie("age"))
  res.send("Cookie deleted");
})


// FLASH MESSAGE  
router.get('/flash', function (req, res) {
  // req.flash("name",value)
  req.flash("age", 21)
  res.send("Flash message created")
})

router.get('/flashCheck', function (req, res) {
  console.log(req.flash("age"));
  res.send("check backend terminal")
})



module.exports = router;
