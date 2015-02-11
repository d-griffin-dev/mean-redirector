var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    
  //  res.redirect(301, DATA.defaultUrl); send to root

  res.render('index', { title: 'Express' });
});

module.exports = router;
