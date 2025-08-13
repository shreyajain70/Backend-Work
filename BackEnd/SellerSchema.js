const mongoose = require("mongoose")

const SellerSchmea = new mongoose.Schema({
Title:{type:String, required:true },
image:{type:String, required:true },
Description:{type:String, required:true },
Price:{type:Number, required:true },
})
module.exports = mongoose.model("Posted Products", SellerSchmea);