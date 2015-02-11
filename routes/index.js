var express = require('express');
var router = express.Router();



/* GET default page. */
router.get('/', function(req, res, next) {
    
    //  res.redirect(301, DATA.defaultUrl); send to root
    /* Activate below for debugging */
    res.render('index', { title: 'Express' });
});

module.exports = router;
