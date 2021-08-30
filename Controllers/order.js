const orders = require("../Models/order");
const express = require('express');
const mongoose = require('mongoose');

exports.postOrder = async (req, res) => {
    const {PlacedBy, PlacedByUserId, PlacedOn, Items, Quantity, Amount} = req.body ;
    console.log(req.body);

    const orderdetails = {
        PlacedBy: PlacedBy,
        PlacedByUserId: PlacedByUserId,
        PlacedOn: PlacedOn,
        Items: Items,
        Quantity: Quantity,
        Amount: Amount
    }

    orders.insertMany(orderdetails)
     .then(
         response => {
             res.status(200).json({message: "Order Placed Successfully",response})
         }
     ).catch(err => console.log(err));
}

exports.getOrdersByUserId = (req,res) => {
    let userId = req.params.PlacedByUserId;
    console.log(userId);
  /*  let filteredUser = orders.filter((item) => item.PlacedByUserId == userId);
    console.log("Filtered User Id - ", filteredUser);

    res.status(200).json({message:"Orders by User fetched successfully!",OrdersData1: filteredUser});

   */
    orders.findById(userId)
    .then(response => {
        res.status(200).json({ messsage: "Orders by User fetched successfully!", OrdersData: response});

    }).catch(err => console.log(err))

}
