let { Schema, model, Types } = require('mongoose');
var schema = Schema({
    added_by: { type: Types.ObjectId, ref: "administrators" },
    category_id: { type: Types.ObjectId, ref: "category" },
    name: String,  /* unique */
    designation: String,
    qualification: String,
    no_of_vacancy: String,
    experience: String,
    key_skills: String,
    salary: String,
    posting_date: { type: Date },
    closing_date: { type: Date },
    status: { type: Number, default: 1 },
    old_status: Number,
    time_stamps: Number
}, { timestamps: true, versionKey: false });

var jobs = model('jobs', schema, 'jobs');
module.exports = jobs;