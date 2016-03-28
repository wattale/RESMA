var express = require('express');
var router = express.Router();
var passport = require('passport');
var userService = require('../services/user-service');


/* GET login page. */
router.get('/login', function(req, res, next){
  var vmd = {
    title: 'Resma|login'
  };
  res.render('user/login', vmd);
});

/* GET signin page. */
router.get('/signin', function(req, res, next){
  var vmd = {
    title: 'Resma|signin',
    showLogin: true
  };
  res.render('user/signin',vmd);
});

/* POST login. */
router.post('/login', passport.authenticate('local', function (req, res, next) {
  res.redirect('home/home');
}));

/* POST signin. */
router.post('/signin', function(req, res, next){
  userService.addUser(req.body, function (err) {
    if (err){
      console.log(err);
      var vmd = {
        title: 'Resma|signin',
        input: req.body,
        error: err
      };
      delete data.input.password;
      return res.render('user/signin', vmd);
    }
    req.login(req.body, function (err) {
      res.redirect('/home');
    });
  });
});

/* GET logout. */
router.get('/logout', function (req, res, next) {
  req.logout();
  res.redirect('/index');
});

module.exports = router;
