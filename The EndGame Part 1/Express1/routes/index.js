
var express = require('express');
var router = express.Router();
const userModel = require('./users');
const session = require('express-session');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/create', async function (req, res) {
  let userData1 = await userModel.create({
    username: "soniye",

    nickname: "kurian",

    description: " Hello i am soni",

    categories: ['2', '3'],

  })
  res.send(userData1)
});

router.get('/find', async function (req, res) {


  // let allData = await userModel.find({      //idhr soni ka i capital hai that is why not showiing anything on the output 
  //   username:"sonI"                        //islie isse bachne ke liye regex ka use hota hai
  // })
  let regex = new RegExp("^SoNi$", "i")
  let allData = await userModel.find({          // ^ shuruaat me 
    username: regex                             // $ end me 
  })                                            // isse ye hota hai ki capital letter wala issue solve hojayega
  res.send(allData)
});

module.exports = router;
