var path = require("path");
var fs = require("fs");
var config = JSON.parse(fs.readFileSync(path.join(__dirname, "/config.json"), "utf8"));
var CONFIG = {};
CONFIG.ENV = process.env.NODE_ENV || "development";
CONFIG.PORT = process.env.VCAP_APP_PORT || config.port;
CONFIG.DB_URL = "mongodb://" + config.mongodb.host + ":" + config.mongodb.port + "/" + config.mongodb.database;
CONFIG.SECRET_KEY = 'SriGokulamHospital';

module.exports = CONFIG;
