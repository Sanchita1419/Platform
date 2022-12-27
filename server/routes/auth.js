const router = require("express").Router();
const User = require("../models/User");

//Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong credentials");

    if (req.body.password === user.password) {
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } else {
      res.status(400).json("Wrong credentials");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
