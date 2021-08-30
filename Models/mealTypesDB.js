const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Registering the City Schema
const mealSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  meal_type: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("MealType", mealSchema, "mealtypes");
