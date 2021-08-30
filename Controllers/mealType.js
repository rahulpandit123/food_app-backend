const mealType = require("../Models/mealTypesDB");

exports.getMealTypesDB = (req, res) => {
  mealType
    .find()
    .then((response) => {
      res.status(200).json({
        meassage: "MealType from DB got successfully",
        mealType: response,
      });
    })
    .catch((err) => console.log(err));
};
