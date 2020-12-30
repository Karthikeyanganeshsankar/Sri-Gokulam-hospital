const CONFIG = require("../config/config");
const async = require("async");
const mail = require("../model/mail.js");
const db = require("../model/mongodb.js");

function sendmail(data, callback) {
    async.waterfall(
        [
            function (callback) {
                db.GetOneDocument("settings", { alias: "general" }, {}, {}, function (err, settings) {
                    if (err || !settings) {
                        callback("Configure your website settings");
                    } else {
                        callback(err, settings.settings);
                    }
                });
            },

            function (settings, callback) {
                db.GetOneDocument("emailtemplate", { slug: data.template, status: { $ne: 0 } }, {}, {}, function (err, template) {
                    if (err || !template) {
                        callback("Unable to get email template", settings);
                    } else {
                        callback(err, settings, template);
                    }
                });
            }
        ],
        function (err, settings, template) {
            if (err) {
                callback(err);
            } else {
                //  console.log("settings",agency.address.formatted_address)
                let html = template.email_content;
                html = html.replace(/{{privacy}}/g, settings.site_url + "page/privacypolicy");
                html = html.replace(/{{terms}}/g, settings.site_url + "page/termsandconditions");
                html = html.replace(/{{contactus}}/g, settings.site_url + "contact_us");
                // html = html.replace(/{{senderemail}}/g, template.sender_email);
                // html = html.replace(/{{sendername}}/g, template.sender_name);
                html = html.replace(/{{logo}}/g, settings.site_url + data.agencyLogo);
                html = html.replace(/{{site_title}}/g, data.agencyName);
                html = html.replace(/{{email_title}}/g, settings.site_title);
                html = html.replace(/{{email_address}}/g, settings.email_address);
                html = html.replace(/{{site_url}}/g, settings.site_url);
                // html = html.replace(/{{agency_address}}/g, agency.address.formatted_address || "Agency Portal");

                for (let i = 0; i < data.html.length; i++) {
                    const regExp = new RegExp("{{" + data.html[i].name + "}}", "g");
                    html = html.replace(regExp, data.html[i].value);
                }
                let subject = template.email_subject;
                for (let j = 0; j < data.email_subject.length; j++) {
                    const regExp = new RegExp("{{" + data.email_subject[j].name + "}}", "g");
                    subject = subject.replace(regExp, data.email_subject[j].value);
                }
                const tomail = data.to ? data.to : template.sender_email;
                const frommail = data.from ? data.from : template.sender_email;
                const agency_name = data.agencyName ? data.agencyName : template.sender_email;

                const mailOptions = {
                    // from: template.sender_email,
                    from: agency_name + " <" + frommail + ">",
                    to: tomail,
                    subject: subject,
                    // subject: template.email_subject,
                    text: template.email_subject,
                    html: html
                };
                if (data && data.attachments) {
                    mailOptions.attachments = data && data.attachments;
                }
                mail.send(mailOptions, function (err, response) {
                    const data = {};
                    data.mailOptions = mailOptions;
                    data.response = response;
                    callback(err, data);
                });
            }
        }
    );
}

module.exports = {
    sendmail: sendmail
};
