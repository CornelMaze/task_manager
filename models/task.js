const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
 task: {
  type: String,
  required: true,
 },
 status: {
  type: Boolean,
  default: false,
 },
});
module.exports = mongoose.model("task", taskSchema);
