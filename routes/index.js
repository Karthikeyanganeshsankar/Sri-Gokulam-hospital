const path = require("path");
const CONFIG = require("../config/config");

module.exports = (app, passport, io) => {
    try {
        const administrators = require("./administrators")(app, io);
        const user = require("./site")(app, io);

        app.get("/", function (req, res) {
            res.sendFile(path.join(__dirname, "../public/index.html"));
        });

        app.get("/admin/*", function (req, res) {
            res.sendFile(path.join(__dirname, "../public/admin/index.html"));
        });

        app.get("/*", function (req, res) {
            res.sendFile(path.join(__dirname, "../public/index.html"));
        });
    } catch (e) {
        console.log("Error in Router", e);
    }
};
