var express = require('express');
var router = express.Router();

router.get('/:id',function(req,res,next){
    console.log(`the id is ${req.params.id}`);

    res.render(`blogs/blog_${req.params.id}.ejs`,{blog : {tags:["tag1","tag2"],title:"Hydratation et course à pied ,Qui dit vrai?"}});
  });
  module.exports = router;
