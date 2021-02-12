"use strict";

var path = require("path");

var CONFIG = require("../config/config");

module.exports = function (app, passport, io) {
  try {
    var administrators = require("./administrators")(app, io);

    var user = require("./site")(app, io);

    app.get("/admin/*", function (req, res) {
      console.log("I amaa");
      res.sendFile(path.join(__dirname, "../build/admin/index.html"));
    });
    app.get("/*", function (req, res) {
      console.log("fsafffasfasf");
      res.sendFile(path.join(__dirname, "../build/admin/index.html"));
    });
  } catch (e) {
    console.log("Error in Router", e);
  }
};