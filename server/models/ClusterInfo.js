const mongoose = require("mongoose");

const ClusterInfoSchema = new mongoose.Schema({
  node: { type: String },
  ip_address: { type: String },
});

module.exports = mongoose.model("ClusterInfo", ClusterInfoSchema);
