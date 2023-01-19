const mongoose = require("mongoose");

const EdgenodeOrinSchema = new mongoose.Schema({
  device_id: { type: String },
  date: { type: Date },
  time: { type: Date },
  inspector_name: { type: String },
  part_no: { type: Number },
  defect_class: { type: Array },
  defect_size: { type: Array },
  cpu_usage: { type: Number },
  ram_usage: { type: Number },
  lowlight_image: { type: Buffer },
  whitelight_image: { type: Buffer },
  contoured_image: { type: Buffer },
});

module.exports = mongoose.model("EdgenodeOrin", EdgenodeOrinSchema);
