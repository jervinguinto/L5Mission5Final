const mongoose = require('mongoose')
const testimonySchema = new mongoose.Schema({
    caption:String,
image:String,
name:String,
location:String,


})



module.exports = mongoose.model("testimony",testimonySchema)