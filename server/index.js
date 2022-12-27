const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const dataRoute = require("./routes/data");
const authRoute = require("./routes/auth");

app.use(bodyParser.json());
dotenv.config();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected to MongoDB"))
  .catch((err) => console.log(err));

// let gfs;
// const conn = mongoose.createConnection(process.env.MONGO_URL)
// conn.once("open", () => {
//   gfs = Grid(conn.db, mongoose.mongo);
//   gfs.collection("uploads");
//   console.log("Connection Successful");
// });

app.use("/api/data", dataRoute);
app.use("/api/auth", authRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Backend is running on port " + PORT);
});
