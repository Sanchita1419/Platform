const mongoose = require("mongoose");

const url = 'https://t4.ftcdn.net/jpg/04/21/43/95/360_F_421439576_zzg0kGw1QZ6S6WDAS4qgglRPP4wxddjS.jpg'
const DataSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        // name2:{
        //     type: String,
        //     default:"name2"
        // },
        img: {
            data: Buffer,
            contentType: String
        },
        // img2: {
        //     data: Buffer,
        //     contentType: String,
        // }
        
    },
    {timestamps:true}
);

module.exports = mongoose.model("Data", DataSchema);