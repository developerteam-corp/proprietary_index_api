import mongoose from "mongoose";
import connection from "../db.js";
let Schema = mongoose.Schema;

let EventSchema = new Schema(
  {
    name: String,
    color: String
  },
  {
    timestamps: true
  }
);

module.exports = connection.conn.model("NOTE", EventSchema);
