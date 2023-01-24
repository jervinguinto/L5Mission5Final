const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoURL = process.env.mongoURL;
const Testimony = require("./Models/testimonyModel");
const Rentals = require("./Models/rentalModel");

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("connected to db");
    
  })
  .catch(() => {
    console.log("not connecting");
  });

const getTestimony = async (req, res) => {
  const testimony = await Testimony.find().exec();
  res.json(testimony);
};

const createTestimony = async (req,res) =>{
const createTestimony = new Testimony({


caption:req.body.caption,
image:req.body.image,
name:req.body.name,
location:req.body.location
})
const result = await createTestimony.save()
res.json(result)

}


const getRental = async (req, res) => {
  const rentals = await Rentals.find().exec();
  res.json(rentals);
};

exports.getTestimony = getTestimony;
exports.createTestimony= createTestimony;
exports.getRental = getRental;
