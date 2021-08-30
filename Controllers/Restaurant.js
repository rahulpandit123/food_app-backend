const { response } = require("express");
const Restaurant = require("../Models/RestaurantSchema");

exports.getRestaurantByLocation = (req, res) => {
  const locationId = req.params.locationId;
  Restaurant.find({ location_id: locationId })
    .then((response) => {
      res
        .status(200)
        .json({
          message: "Restaurant Fetched Successfully!",
          restaurants: response,
        });
    })
    .catch((err) => console.log(err));
};

exports.filterRestaurant =  (req, res) => {
  let { location, mealtype, cuisine, lcost, hcost, page, sort } = req.body;
  page = page ? page : 1;
  sort = sort ? sort : 1;
  const itemsPerPage = 5;
  let payload = {}
  const match = {}
  



  if (mealtype) {
    console.log(mealtype)
    payload = {
        mealtype_id: mealtype
    }
  }
  if (mealtype && location) {
      payload = {
          mealtype_id: mealtype,
          location_id: location
      }
  }
  if (mealtype && cuisine) {
      payload = {
          mealtype_id: mealtype,
          "cuisine.id" : { $in: cuisine }
      }
  }
  if (mealtype && lcost && hcost) {
      payload = {
          mealtype_id: mealtype,
          min_price: { $lte: hcost, $gte: lcost }
      }
  }
  if (mealtype && location && cuisine) {
      payload = {
          mealtype_id: mealtype,
          location_id: location,
          "cuisine.id" : { $in: cuisine }
      }
  }

  if (mealtype && location && hcost && lcost) {
      payload = {
          mealtype_id: mealtype,
          location_id: location,
          min_price: { $lte: hcost, $gte: lcost }
      }
  }

  if (mealtype && cuisine && hcost && lcost) {
      payload = {
          mealtype_id: mealtype,
          "cuisine.id" : { $in: cuisine },
          min_price: { $lte: hcost, $gte: lcost }
      }
  }

 
  Restaurant.find(payload).sort({min_price: sort}) //sorting
.then(
    response => {
        totalCount = response.length;
        //pagination logic
        const s = page + (page - 1);  // var s to make look it simpler
        const filteredresponse = response.slice(s-1, s+1);
        var pageCount = [];
        if(response.length %2 != 0){
            response.length = response.length + 1;
        }
        var r = response.length/2;
        var p = 1;
        while(p <= r){
            pageCount.push(p);
            p++;
        }
        res.status(200).json({ message: 'Restaurants fetched successfully', pageCount, totalCount, restaurants : filteredresponse })
    }
).catch(err => console.log(err))



  // try {

  //   const result = Restaurant.find(payload).sort({ min_price: sort })
  //   .limit(1)
  //   .skip(1)
  //     .populate({
  //       path: 'posts'
  //     })
  
  //   res.status(200).json({ message:" data fetched successfully!", restaurants: result})    
  // } catch (error) {
  //   res.status(500).json({error: error})
  // }


  //  .then(async response => {
  //    //Pagination Logic
  //    if (req.query.published) {
  //         match.published = req.query.published === true;
  //    }
  //    let result;
  //    try {
  //      result = await response.populate({
  //         path:'posts',
  //         // match,
  //         options: {
  //           limit: parseInt(req.query.limit),
  //           skip: parseInt(req.query.skip)
  //         }
  //       })
  //       // res.send(req.user.posts)
  //    } catch (error) {
  //      res.status(500);
  //    }
  //    const filteredResponse = result;
  //   //  res.status(200).json({ message:" data fetched successfully!", restaurants: filteredResponse});
  //    res.send(result)
  // })
  //   .catch(err => console.log(err))

  }

exports.getRestaurantDetailsById = (req, res) => {
  const restId = req.params.restId;
  
  Restaurant.findOne({_id:restId}) 
  .then(response => {
    res.status(200).json({message: "Data fetched successfully! -> ",restaurants: response });

  }).catch(err => console.log(err))
}
exports.pagenation = async (req, res) => {
  try {
    const {page=1, limit=5} = req.query ;
    const products = await Restaurant.find()
    .limit(limit * 1)
    .skip((page - 1) * limit);
    res.status(200).json({total: products.length,products})
  } catch (error) {
    console.log(err);
    res.status(500).json({
      error: err
    });
  }
};
/*
  Restaurant.find({
    location_id: location,
    mealtype_id: mealtype,
    min_price: { $lte: hcost, $gte: lcost },
  })
    .then((response) => {
      res
        .status(200)
        .json({
          message: "Restaurant Fetched successfully!!",
          restaurants: response,
        });
    })
    .catch((err) => console.log(err));
};
*/