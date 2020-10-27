var express = require('express');
var router = express.Router();
let info=[" some phrase  " , " i can do anything i want ", "i can be whoever i want"];

/* GET home page. */
let news_counter =0;
router.get('/new',function(req,res){

  res.send(info[news_counter]);
  news_counter++;
  if (news_counter>= info.length) news_counter=0;
});
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',game:info});
});


module.exports = router;
