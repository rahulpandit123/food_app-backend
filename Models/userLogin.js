const Joi = require('joi');
const mongoose = require('mongoose');

const userLogin = mongoose.model('userLogin', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 1024
    }
}));

function validateUser(userLogin) {
    const schema = {
        name: Joi.string().min(2).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(2).max(255).required()
    };
    return Joi.validate(userLogin, schema);
}

exports.userLogin = userLogin;
exports.validate = validateUser;

