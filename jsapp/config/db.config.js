"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let config = {
    dbUrl: process.env.DBURL || "mongodb+srv://bhaweshsingh:bhaweshsingh@cluster0.mng6s.mongodb.net/uptimedb",
    port: process.env.PORT || 9090,
    env: process.env.NODE_ENV || "development",
    logDir: process.env.LOGDIR || "logs",
    viewEngine: process.env.VIEW_ENGINE || "html"
};
module.exports = config;
