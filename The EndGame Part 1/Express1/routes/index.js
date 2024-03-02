
var express = require('express');
var router = express.Router();
const userModel = require('./users');
const session = require('express-session');
router.get('/', function (req, res) {

  /* GET home page. */
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

// How can i perform a case-insensitive search in mongoose?
// Ans:
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


// how do i find document where an array field contains all of a set of values ?
// Ans :

router.get('/findCat', async function (req, res) {

  let allData = await userModel.find({
    categories: { $all: ['1', '2'] }
  })
  res.send(allData)

});

// How can i find the document with a sepcific date range?
// Ans :

router.get('/findDate', async function (req, res) {
  var date1 = new Date('2024-03-01')
  var date2 = new Date('2024-03-02')

  let allData = await userModel.find({
    datecreated: { $gte: date1, $lte: date2 }
  })
  res.send(allData)

});

// How can i filter document based on the existence(presence) of a field in Mangoose?
// Ans:

router.get('/findPre', async function (req, res) {

  let allData = await userModel.find({ categories: { $exists: true } })
  res.send(allData)

});


// How can i filter a document based on specific field's length
// Ans :

router.get('/findLength', async function (req, res) {

  let allData = await userModel.find({
    $expr: {
      $and: [
        { $gte: [{ $strLenCP: '$nickname' }, 1] },
        { $lte: [{ $strLenCP: '$nickname' }, 8] }
      ]
    }
  })
  res.send(allData)

});





module.exports = router;
