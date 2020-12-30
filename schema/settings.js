let { Schema, model } = require('mongoose');

let settingSchema = Schema({
    alias: { type: String, unique: true },
    settings: {}
}, { timestamps: true, versionKey: false });

let settings = model("settings", settingSchema, "settings");
module.exports = settings;
