const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    // profilePic:{
    //     type: String,
    //     default:""
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema(
//   {
//     username: {
//       type: String,
//     },
//     password: {
//       type: String,
//     },
//   },
//   { timestamps: true }
// );
// const fpidb = mongoose.connection.useDb("fpidb");
// const User = fpidb.model("user", UserSchema);
// export default User;
