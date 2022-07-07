"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { mongoose } = require("mongoose");
const Schema = mongoose.Schema;
var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    created_at: { type: Date, default: Date.now }
});
module.exports = mongoose.model("User", userSchema);
