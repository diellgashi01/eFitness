const { required } = require("joi");
const mongoose = require("mongoose");

const DietCategoySchema = new mongoose.Schema(
  {
   name:{
       type:String,
       required:true
   },
 },
  { timestamps: true }
);

module.exports = mongoose.model("DietCategory", DietCategoySchema);