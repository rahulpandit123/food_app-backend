const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Registering the City Schema
const LocationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  city_id: {
    type: String,
    required: true,
  },
  location_id: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country_name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("data", LocationSchema, "data1");
