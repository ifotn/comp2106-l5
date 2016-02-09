var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var date = new Date().toLocaleDateString("en-US");

  res.render('index', { title: 'Express',
    date: date });
});

module.exports = router;
