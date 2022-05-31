import mongoose from "mongoose"

mongoose.connect("mongodb+srv://root:1234@cluster0.eakurj0.mongodb.net/node_js");

let db = mongoose.connection;

export default db;