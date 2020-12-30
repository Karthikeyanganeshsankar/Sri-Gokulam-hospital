let { Schema, model, Types } = require('mongoose');
var schema = Schema({
    added_by: { type: Types.ObjectId, ref: "administrators" },
    name: String,  /* unique */
    status: { type: Number, default: 1 },
    old_status: Number,
    time_stamps: Number
}, { timestamps: true, versionKey: false });

var category = model('category', schema, 'category');
module.exports = category;