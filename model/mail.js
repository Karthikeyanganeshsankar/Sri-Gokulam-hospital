"use strict";
const nodemailer = require("nodemailer");
const db = require("../model/mongodb");

function send(data, callback) {
  db.GetOneDocument("settings", { alias: "smtp" }, {}, {}, function (err, settings) {
    if (err || !settings) {
      data.response = "Error in settings";
      callback(data);
    } else {
      const smtp_host = settings.settings.smtp_host;
      const smtp_port = settings.settings.smtp_port;
      const smtp_username = settings.settings.smtp_username;
      const smtp_password = settings.settings.smtp_password;
      const transporter = nodemailer.createTransport({
        service: "SendGrid",
        auth: {
          api_key: "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",
          user: smtp_username,
          pass: smtp_password
        }
      });

      transporter.sendMail(data, function (error, info) {
        // console.log("data----------->>", data, error, info);
        callback(error, info);
      });
    }
  });
}

module.exports = {
  send: send
};
