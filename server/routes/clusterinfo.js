const ClusterInfo = require("../models/ClusterInfo");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const data = await ClusterInfo.find();

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
