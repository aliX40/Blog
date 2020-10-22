var express = require('express');
var router = express.Router();
let info=[" some phrase  " , " i can do anything i want ", "i can be whoever i want"];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',game:info});
});

module.exports = router;
