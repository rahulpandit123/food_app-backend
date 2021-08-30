const Location = require("../Models/locations");

exports.getLocations = (req, res) => {
  Location.find()
    .then((response) => {
      res.status(200).json({
        message: "Location Fetched Successully",
        locations: response,
      });
    })
    .catch((err) => console.log(err));
};
