const mongoose = require("mongoose")

const LinkDatabase = async()=>{
try{
await mongoose.connect("mongodb+srv://manthan:manthan@cluster0.hf7yvrt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
console.log("Connected Mongoose")
}
catch(err){
console.log("Mongoose not connected", err)
}
}
module.exports = LinkDatabase;