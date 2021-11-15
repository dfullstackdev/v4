const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    role: {type: String, required: true},
    phone: {type: Number, required: false},
    postedBy: {type: String, required: true},
},{
    timestamps : true,
})

const workerModel = new mongoose.model('workers', workerSchema)
module.exports = workerModel