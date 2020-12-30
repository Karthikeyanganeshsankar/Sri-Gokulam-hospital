let { Schema, model, Types } = require('mongoose');
var schema = Schema({
    category_id: { type: Types.ObjectId, ref: "category" },
    jobs_id: { type: Types.ObjectId, ref: "jobs" },
    jobs_data: {
        name: String,
        designation: String
    },
    cat_name: String,
    name: String,
    email: String,
    qualification: String,
    phone: String,
    message: String,
    docs: String,
    status: { type: Number, default: 1 },  /* 0 - delete 1 -default 2-view or processing */
    old_status: Number,
    time_stamps: Number
}, { timestamps: true, versionKey: false });

var applied_jobs = model('applied_jobs', schema, 'applied_jobs');
module.exports = applied_jobs;