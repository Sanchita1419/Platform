const mongoose = require("mongoose");

const EdgenodeOrinSchema = new mongoose.Schema({
  lowlight_image: { type: Buffer },
  whitelight_image: { type: Buffer },
  contoured_image: { type: Buffer },
  defect_class: { type: Array },
  defect_size: { type: Array },
  cpu_usage: { type: Number },
  ram_usage: { type: Number },
  device_id: { type: String },
  date: { type: String },
  time: { type: String },
  inspector_name: { type: String },
  part_no: { type: Number },
});

module.exports = mongoose.model("EdgenodeOrin", EdgenodeOrinSchema);
