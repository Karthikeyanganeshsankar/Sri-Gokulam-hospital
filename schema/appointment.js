let { Schema, model, Types } = require('mongoose');
var schema = Schema({
    department_id: { type: Types.ObjectId, ref: "department" },
    department_name: String,
    name: String,
    email: String,
    age: String,
    phone: String,
    gender: String,
    time: String,
    appointment_date: Date,
    status: { type: Number, default: 1 },  /* 0 - delete 1 -default 2-view or processing */
    old_status: Number,
    time_stamps: Number
}, { timestamps: true, versionKey: false });

var appointments = model('appointments', schema, 'appointments');
module.exports = appointments;