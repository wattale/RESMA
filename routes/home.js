var express = require('express');
var router = express.Router();
var restrict = require('../auth/restrict');

/* GET home page. */
router.get('/', restrict, function(req, res, next) {
    console.log(req.user);
    var vmd = {
        title: 'Resma | Home',
        fname: req.user ? req.user.name : null
    };
    res.render('home/home', vmd);
});

module.exports = router;