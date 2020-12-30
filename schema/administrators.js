let { Schema, model } = require('mongoose');
var schema = Schema({
  username: { type: String, lowercase: true, index: { unique: true }, trim: true },
  email: { type: String, lowercase: true, index: { unique: true }, trim: true },
  password: String,
  name: String,
  role: String,
  status: { type: Number, default: 1 },
  old_status: Number,
  phone: String,
  tel: String,
  activity: {
    last_login: { type: Date, default: Date.now },
    last_logout: { type: Date, default: Date.now }
  },
  reset_code: String,
  time_stamps: Number
}, { timestamps: true, versionKey: false });

var administrators = model('administrators', schema, 'administrators');
module.exports = administrators;