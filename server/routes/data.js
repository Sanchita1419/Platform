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
    function binToString(img) {
      const base64String = btoa(String.fromCharCode(...new Uint8Array(img)));
      return base64String;
    }
    let responseData = [];
    const l = data.length;
    console.log("data length " + l);

    //console.log(data[l - 1]);
    for (var i = 0; i < l; i++) {
      let responseObj = {
        _id: data[i]._id,
        defect_class: data[i].defect_class,
        defect_size: data[i].defect_size,
        cpu_usage: data[i].cpu_usage,
        ram_usage: data[i].ram_usage,
        device_id: data[i].device_id,
        date: data[i].date,
        time: data[i].time,
        inspector_name: data[i].inspector_name,
        part_no: data[i].part_no,
        lowlight_image: binToString(data[i].lowlight_image),
        whitelight_image: binToString(data[i].whitelight_image),
        contoured_image: binToString(data[i].contoured_image),
      };
      console.log("hi" + i);
      responseData.push(responseObj);
      //console.log(responseData);
    }

    // let responseObj = {
    //   _id: data[0]._id,
    //   defect_class: data[0].defect_class,
    //   defect_size: data[0].defect_size,
    //   cpu_usage: data[0].cpu_usage,
    //   ram_usage: data[0].ram_usage,
    //   device_id: data[0].device_id,
    //   date: data[0].date,
    //   time: data[0].time,
    //   inspector_name: data[0].inspector_name,
    //   part_no: data[0].part_no,
    //   lowlight_image: binToString(data[0].lowlight_image),
    //   whitelight_image: binToString(data[0].whitelight_image),
    //   contoured_image: binToString(data[0].contoured_image),
    // };
    // console.log("hi");
    // responseData.push(responseObj);
    // console.log(responseData);
    res.status(200).json(responseData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/detail/:id", async (req, res) => {
  try {
    // console.log(req.params.id);
    const data = await EdgenodeOrin.findById(req.params.id);
    function binToString(img) {
      const base64String = btoa(String.fromCharCode(...new Uint8Array(img)));
      return base64String;
    }
    // function binToString(img) {
    //   console.log("Image");
    //   console.log(img);
    //   const base64String = btoa(String.fromCharCode(...new Uint8Array(img)));
    //   //console.log(base64String);
    //   return base64String;
    // }
    let responseObj = {
      _id: data._id,
      defect_class: data.defect_class,
      defect_size: data.defect_size,
      cpu_usage: data.cpu_usage,
      ram_usage: data.ram_usage,
      device_id: data.device_id,
      date: data.date,
      time: data.time,
      inspector_name: data.inspector_name,
      part_no: data.part_no,
      lowlight_image: binToString(data.lowlight_image),
      whitelight_image: binToString(data.whitelight_image),
      contoured_image: binToString(data.contoured_image),
    };

    console.log(responseObj);
    res.status(200).json(responseObj);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get("/typetime", async (req, res) => {
//   try {
//     const data = await EdgenodeOrin.find().sort({ _id: 1 }).limit(10);
//     // db.foo.find().sort({_id:1}).limit(50);
//     let resData = [];
//     for (var i = 0; i < data.length; i++) {
//       let resObj = {
//         _id: data[i]._id,
//         defect_class: 1,
//         time: data[i].time,
//       };
//       resData.push(resObj);
//     }
//     // console.log(data[0].time);
//     res.status(200).json(resData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get("/typenumber", async (req, res) => {
  responseData = [];

  try {
    const data = await EdgenodeOrin.find();

    let totalNo = 0;
    // console.log(data.length);
    for (var i = 0; i < data.length; i++) {
      totalNo += data[i].defect_class.length;

      // for (var j = 0; j < data[i].defect_class.length; j++) {
      //   totalNo += 1;
      // }
      // const no = data[i].defect_class.length;
      // console.log(no);
      // totalNo = totalNo + no;
      // console.log("dxbs");
      // console.log(data[i].defect_class.length);
    }

    // console.log(totalNo);
    // let type = [0, 0, 0, 0, 0, 0];
    // for (var i = 0; i < data.length; i++) {
    //   // resposeObj={type:"", number:""}

    //   for (var j = 0; j < data[i].defect_class.length; j++) {
    //     type[j] += 1;
    //   }

    //   console.log(data[i].defect_class);
    // }
    // console.log(type);

    res.status(200).json(totalNo);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/totalparts", async (req, res) => {
  try {
    const response = await EdgenodeOrin.find();
    const data = response.length;
    console.log(data);
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
