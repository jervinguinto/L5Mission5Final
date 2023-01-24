const mongoose = require('mongoose')


const rentalSchema = new mongoose.Schema({

    MainImage:String,
    secondImg:String,
    thirdImg:String,
    addess1:String,
    address2:String,
    pets:String,
    price:String


})

module.exports = mongoose.model('rental',rentalSchema)