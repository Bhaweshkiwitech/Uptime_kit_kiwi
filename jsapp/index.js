"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src = require("./src/database");
const Config = require("./config/db.config");
const express = require("express");
const app = express();
require("./services/user.services");
//we are using express-session module Session data is not saved in the cookie itself, 
// just the session ID. Session data is stored server-side
const session = require("express-session");
app.set('view engine', 'ejs'); //middleware, ejs is like html which we can use to render html element in browser.
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'SECRET'
}));
const port = Config.port; // default port to listen
// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
