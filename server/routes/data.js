const router = require("express").Router();
const Data = require("../models/Data");
const EdgenodeOrin = require("../models/EdgenodeOrin");

const multer = require("multer");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
dotenv.config();

//Create storage engine
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.join(__dirname, "/uploads/"));
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

//Get image from db
// router.get("/:id", async (req, res) => {
//   try {
//     const data = await Data.findById(req.params.id);
//     console.log(data);
//     res.status(200).json(data);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get("/", async (req, res) => {
//   try {
//     const data = await Data.find();
//     console.log(data);
//     res.status(200).json(data);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get("/", async (req, res) => {
  try {
    const data = await EdgenodeOrin.find();

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.post("/", async (req, res) => {
//   const data = new Data(req.body);
//   try {
//     const savedData = await data.save();
//     res.status(200).json(savedData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.post("/", upload.single("testImg"), (req, res) => {
//   const savedData = new Data({
//     name: req.body.name,
//     img: {
//       data: fs.readFileSync(
//         path.join(__dirname, "/uploads/", req.file.filename)
//       ),
//       contentType: "image/jpg",
//     },
//   });
//   savedData
//     .save()
//     .then((res) => {
//       console.log("Image saved");
//     })
//     .catch((err) => {
//       console.log(err, "errror occured");
//     });
//   res.send("Image saved");
// });
module.exports = router;
