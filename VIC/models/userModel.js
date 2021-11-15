const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    username : {type: 'String', required: true},
    password : {type: 'String', required: true},

    firstname : {type: 'String', default: ''},
    lastname : {type: 'String', default: ''},
    email : {type: 'String', default: ''},
    mobileNumber : {type: 'String', default: ''},
    portfolio : {type: 'String', default: ''},

    about : {type: 'String', default: ''},
    address : {type: 'String', default: ''},

    education : {type: [], default : ['']},
    skills : {type:[], default : ['']},
    projects : {type: [], default : ['']},
    experiences : {type: [], default : ['']},

    appliedSites: [],

}, { timestamps : true });

const userModel = new mongoose.model('users', userSchema)

module.exports = userModel;

