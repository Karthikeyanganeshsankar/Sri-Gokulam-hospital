let { Schema, model } = require('mongoose');
var schema = Schema({
    type: String,  /* contact_us, appointments, applied_jobs */
    action: String,
    message: String,
    status: { type: Number, default: 1 },
    readingStatus: { type: Number, default: 0 },  /*0-unread 1 mark as read  */
    time_stamps: Number
}, { timestamps: true, versionKey: false });

var notification = model('notification', schema, 'notification');
module.exports = notification;