const mongoose = require('mongoose');

const siteSchema = new mongoose.Schema({
    private: {type: String, required: true},
    siteName: {type: String, required: true},
    type: {type: String, required: true},
    phone: {type: Number, required: false},
    mp: {type: String, required: true},
    role: {type: String, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    country: {type: String, required: true},
    appliedCandidates: {type: [], required: true},
    postedBy: {type: String, required: true},
},{
    timestamps : true,
})

const siteModel = new mongoose.model('sites', siteSchema)
module.exports = siteModel