var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userService = require('../services/user-service');

var userSchema = new Schema({
    name : {type:String, required: 'Please enter your First Name'},
    email : {type: String, required: 'Please enter an Email'},
    usertype : {type: String, required: 'Please enter what you will use Resma for'},
    phone: {type: Number, required: 'Please enter your phone number'},
    password : {type: String, required: 'Please enter a password'},
    created: {type: Date, default: Date.now}
});

userSchema.path('email').validate(function (value, next) {
    userService.findUser(value, function (err, user) {
        if (err){
            console.log(err);
            return next(false);
        }
        next(!user);
    });
}, 'Email is already in use');

var User = mongoose.model('User', userSchema);

module.exports = {
    User: User
};