var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
  if (req.user){
    return res.redirect('/home/home');
  }
  var vmd = {
    title: 'Resma | manager',
    showLogin: true
  };
  res.render('index', vmd);
});

module.exports = router;
