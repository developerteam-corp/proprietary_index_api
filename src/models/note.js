import mongoose from "mongoose";
import connection from "../db.js";
let Schema = mongoose.Schema;

let NoteSchema = new Schema(
  {
    name: String,
    description: String,
    // template: String,
    status_completed: { type: Boolean, default: false },
    noteId: String,
    parentNoteId: String,
    // req_isin_status: String,
    // { type: String, enum: ["white", "yellow", "green"] },
    // mail_director_status: String,
    // { type: String, enum: ["white", "yellow", "green"] },
    // submission_status: String,
    // {
    //   type: String,
    //   enum: ["white", "blue", "yellow", "green"]
    // }
    templateId: String
  },
  {
    strict: false,
    timestamps: true
  }
);

module.exports = connection.conn.model("NOTE", NoteSchema);
