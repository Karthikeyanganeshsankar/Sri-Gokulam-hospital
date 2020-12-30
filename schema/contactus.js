let { Schema, model } = require('mongoose');
var schema = Schema({
    name: String,
    email: String,
    phone: String,
    subject: String,
    message: String,
    status: { type: Number, default: 1 }, /*0- delete 1 - default 2 -replied */
    old_status: Number,
    time_stamps: Number
}, { timestamps: true, versionKey: false });

var contact_us = model('contact_us', schema, 'contact_us');
module.exports = contact_us;