How can i perform a case-insensitive search in mongoose?
Ans :

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
