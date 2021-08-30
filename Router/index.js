const express = require("express");

const router = express.Router();

const locationController = require("../Controllers/location");
const rest_locationController = require("../Controllers/rest_location");
const mealTypeController = require("../Controllers/widget");
const mealtypeDBController = require("../Controllers/mealType");
const itemController = require('../Controllers/Items');
const restaurantController = require('../Controllers/Restaurant');
const userController = require('../Controllers/User');
const orderController = require("../Controllers/order")
const paymentController = require('../Controllers/Payment');
// const userLoginController = require('../Controllers/userLogin');

router.get("/rest_location", rest_locationController.getRestrauntLocation);
router.get(
  "/rest_locationCity/:city_name",
  rest_locationController.getRestrauntByCity
);
router.get('/restaurantsbylocation/:locationId', restaurantController.getRestaurantByLocation);
router.get("/widget", mealTypeController.getMealTypes);
router.get("/locations", locationController.getLocations);
router.get("/mealtypes", mealtypeDBController.getMealTypesDB);
router.get('/menuItems/:restId', itemController.getMenuItemsByRestaurant);
router.post('/filter', restaurantController.filterRestaurant);
router.get('/getRestaurantDetailsById/:restId', restaurantController.getRestaurantDetailsById);
// router.get('/restaurantdetails/:restId', restaurantController.getRestaurantDetailsById);{/*Newly Added */}
router.get('/pagination', restaurantController.pagenation);
router.post('/userregistration',userController.createUserAccount);
router.post('/login', userController.getUserByLogin);
router.post('/orders', orderController.postOrder);
router.get('/OrdersByUserId', orderController.getOrdersByUserId);
router.post('/payment' ,paymentController.payment);
router.post('/callback', paymentController.callback)
// router.post('/userLogin', userLoginController.routerLogin);



// GET Orders by User API 
module.exports = router;
