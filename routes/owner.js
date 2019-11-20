var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var dotenv = require("dotenv").config();

const mongoDB = process.env.MONGO_URL;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
const Schema = mongoose.Schema;

const PropertyModelSchema = new Schema({
  first_name: String,
  last_name: String,
  mobile: String,
  email: String,
  property_name: String,
  bedrooms: String,
  property_type: String,
  flat_no: String,
  furnished_status: String,
  expected_rent: String,
  available_from: String
});

const PropertyModel = mongoose.model("PropertyDetails", PropertyModelSchema);

db.on("error", console.error.bind(console, "MongoDB connection error:"));

router.post("/register", function(req, res, next) {
  console.log(req.body);
  const registrationData = req.body;
  const property = new PropertyModel({
    first_name: registrationData["firstName"],
    last_name: registrationData["lastName"],
    mobile: registrationData["mobile"],
    email: registrationData["email"],
    property_name: registrationData["propertyName"],
    bedrooms: registrationData["bedrooms"],
    property_type: registrationData["propertyType"],
    flat_no: registrationData["flatNo"],
    expected_rent: registrationData["expectedRent"],
    available_from: registrationData["availableFrom"]
  });
  console.log("BEFORE SAVE");
  
  property.save(function(err) {
    if (err) {
      console.log("SAVE ERROR");
      res.send("ERROR");
    }
    console.log("SAVE NO ERROR");
    res.send({ status: 1, message: "Details saved successfully" });
  });
  console.log("AFTER SAVE");
});

module.exports = router;
