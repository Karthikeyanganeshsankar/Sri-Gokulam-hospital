var db = require("../model/mongodb.js");

let createMessage = (to, from, message, callback) => {
    db.GetOneDocument("settings", { alias: "sms" }, {}, {}, (err, document) => {
        if (err) {
            callback(err, document);
        } else {
            var twilio = document.settings.twilio;
            var client = require("twilio")(twilio.account_sid, twilio.authentication_token);
            if (!from) {
                from = twilio.default_phone_number;
            }
            client.messages.create({ to: to, from: from, body: message }, (err, message) => { callback(err, message); });
        }
    });
}

module.exports = {
    createMessage: createMessage
};
