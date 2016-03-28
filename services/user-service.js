var User = require('../models/user').User;

exports.addUser = function(user, next){
    var newUser = new User({
        name : user.name,
        email: user.email.toLowerCase(),
        usertype: user.usertype,
        phone: user.phone,
        password: user.password
    });

    newUser.save(function (err) {
        if(err){
            return next(err);
        }
        next(null);
    });
};

exports.findUser = function (email, next) {
    User.findOne({email:email.toLowerCase()}, function (err, user) {
        next(err, user);
    });
};