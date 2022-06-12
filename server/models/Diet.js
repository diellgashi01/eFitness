const { required } = require("joi");
const mongoose = require("mongoose");

const DietSchema = new mongoose.Schema(
  {
   title:{
       type:String,
       required:true,
       unique:true
   },
   desc:{
    type:String,
    required:true,
   },
   photo:{
    type:String,
    required:false,
   },
   fullname:{
    type:String,
    required:true,
   },
   categories:{
       type:Array,
       required:true
   }},
  { timestamps: true }
);

module.exports = mongoose.model("Diet", DietSchema);