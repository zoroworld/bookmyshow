const mongoose = require('mongoose');
let usersSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        require: true,
        default: false  //every one not be admin
    }
}, {timestamps: true});

module.exports =  mongoose.model('users', usersSchema); 