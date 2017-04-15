var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/update', function(req, res, next) {
  res.render('update',{title:'博客更新页',name:'博客更新'});
});

module.exports = router;
