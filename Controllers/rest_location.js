const restrauntLocation = require("../Models/rest_locationsData.json");

exports.getRestrauntLocation = (req, res) => {
  let data = restrauntLocation.map((item) => item.city_name);
  console.log(data);
  res.status(200).json({
    message: "Data fetched Successfully for rest",
    result: data,
  });
};

exports.getRestrauntByCity = (req, res) => {
  let citydata = req.params.city_name;
  console.log(citydata);
  let filteredcity = restrauntLocation.filter(
    (item) => item.city_name == citydata
  );
  console.log("Filtered City -", filteredcity);
  res.status(200).json({
    message: "Data for city fetched successfully!!",
    restraunt: filteredcity,
  });
};
