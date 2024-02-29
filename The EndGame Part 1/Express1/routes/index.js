var express = require('express');
var router = express.Router();
const userModel = require('./users')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// CREATE
router.get('/create', async function (req, res) {
  let createdUser = await userModel.create({
    username: "Ujjwal",
    password: 1234,
    age: 21
  })
  console.log("User Created");
  res.send(createdUser)
})

// Finding user 
// It prints all the user present
router.get('/find', async function (req, res) {
  let User = await userModel.find()
  res.send(User)
  console.log("User Found");
})

// Finding particular user 
router.get('/findone', async function (req, res) {
  let OneUser = await userModel.find({
    username: "Ujjwal",
  })
  res.send(OneUser)
})

// DELETE
router.get('/delete', async function (req, res) {
  let DeleteUser = await userModel.findOneAndDelete({
    username: "Ujjwal",
  })

  console.log(DeleteUser);
  if (DeleteUser == null) {
    res.send("All deleted");
  }
  res.send(DeleteUser)
})



module.exports = router;
