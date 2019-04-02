import mongoose from "mongoose";
import connection from "../db.js";
let Schema = mongoose.Schema;

let templateStructureSchema = new Schema(
  {
    templateColumns: Array,
    name: String,
    userId: String
  },
  {
    timestamps: true
  }
);

module.exports = connection.conn.model("TEMPLATESTRUCTURE", templateStructureSchema);
