"use strict";

/** Dependency Injection */
const express = require("express"), // $ npm install express
    path = require("path"), // Node In-Build Module
    bodyParser = require("body-parser"), // $ npm install body-parser
    session = require("express-session"), // $ npm install express-session
    cookieParser = require("cookie-parser"), // $ npm install cookie-parser
    passport = require("passport"), // $ npm install passport
    mongoose = require("mongoose"), // $ npm install mongoose
    validator = require("express-validator"), // $ npm install express-validator
    CONFIG = require("./config/config"), // Injecting Our Configuration
    compression = require("compression"),
    url = require("url"),
    i18n = require("i18n"),
    db = require("./model/mongodb.js"),
    cors = require("cors");
/** /Dependency Injection */

/** Socket.IO */
const app = express(); // Initializing ExpressJS
const server = require("http").createServer(app);
const io = require("socket.io")(server);
// Allow Cross Domain Requests
// io.set("transports", ["websocket"]);
/** /Socket.IO */
/** Global Configuration*/
global.GLOBAL_CONFIG = {};
mongoose.Promise = global.Promise;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
i18n.configure({
    locales: ["en", "ar"],
    defaultLocale: "en",
    autoReload: true,
    directory: __dirname + "/uploads/locales",
    syncFiles: true
});
/** /Global Configuration*/

/** MongoDB Connection */
mongoose.connect(CONFIG.DB_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
});
// mongoose.set("debug", true);
mongoose.connection.on("error", error =>
    console.error("Error in MongoDb connection: " + error)
);
mongoose.connection.on("reconnected", () =>
    console.log("Trying to reconnect!")
);
mongoose.connection.on("disconnected", () =>
    console.log("MongoDB disconnected!")
);
mongoose.connection.on("connected", () => {
    /** Middleware Configuration */
    app.disable("x-powered-by");
    app.use(bodyParser.urlencoded({ limit: "100mb", extended: true })); // Parse application/x-www-form-urlencoded
    app.use(bodyParser.json({ limit: "100mb" })); // bodyParser - Initializing/Configuration
    app.use(cookieParser("CasperonHandyforall")); // cookieParser - Initializing/Configuration cookie: {maxAge: 8000},
    app.use(
        session({
            secret: "CasperonHandyforall",
            resave: true,
            saveUninitialized: true
        })
    ); // express-session - Initializing/Configuration
    // app.use(validator());
    app.use(passport.initialize()); // passport - Initializing
    app.use(passport.session()); // passport - User Session Initializing
    app.use(compression()); // use compression middleware to compress and serve the static content.
    app.use(
        "/app",
        express.static(path.join(__dirname, "/app"), { maxAge: 7 * 86400000 })
    ); // 1 day = 86400000 ms
    app.use(
        "/uploads",
        express.static(path.join(__dirname, "/uploads"), { maxAge: 7 * 86400000 })
    );
    // console.log('__dirname',__dirname)
    app.use(i18n.init);

    app.set("view engine", "html");
    app.locals.pretty = true;

    // app.use('/portal', express.static(path.join(__dirname, '/public/portal'), { maxAge: 7 * 86400000 }));
    // app.set("public", "./public");
    app.use("/", express.static(path.join(__dirname, "build/site/")));
    app.use("/admin", express.static(path.join(__dirname, "build")));

    app.use((req, res, next) => {
        // console.log("====", req.originalUrl);
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Credentials", true);
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        );
        i18n.setLocale(req.headers["accept-language"] || "en");
        next();
    });
    app.use(cors({ origin: true, credentials: true }));
    /** /Middleware Configuration */
    /** Dependency Mapping */
    
    require("./routes")(app, passport, io);
    /** /Dependency Mapping*/

    /** HTTP Server Instance */
    try {
        server.listen(CONFIG.PORT, () => {
            console.log("Server turned on with", CONFIG.ENV, "mode on port", CONFIG.PORT);
        });
    } catch (ex) {
        console.log(ex);
    }
});
/** /MongoDB Connection */

var closeDBConnection = () => {
    mongoose.connection.close(() => { process.exit(0); });
}
// If the Node process ends, close the Mongoose connection
process.on('SIGINT', closeDBConnection).on('SIGTERM', closeDBConnection);