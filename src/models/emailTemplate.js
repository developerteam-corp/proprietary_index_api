import mongoose from "mongoose";
import connection from "../db.js";
let Schema = mongoose.Schema;

let emailTemplateSchema = new Schema(
  {
    to: Array,
    cc: Array,
    email_text: String,
  },
  {
    timestamps: true
  }
);

module.exports = connection.conn.model("EMAILTEMPLATE", emailTemplateSchema);
