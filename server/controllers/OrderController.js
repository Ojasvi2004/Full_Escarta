const express = require("express");
const ordermodel = require("../models/OrderDetails");
const productModel = require("../models/product");

const AddOrder = async (req, res) => {
  console.log(req.body);

  try {
    const {
      first_name,
      last_name,
      email,
      phone,
      address,
      city,
      state,
      OrderProducts,
    } = req.body;

    const myOrder = new ordermodel({
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone,
      address: address,
      city: city,
      state: state,
      OrderItems: OrderProducts,
    });

    const neworder = await myOrder.save();

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({
      success: false,
      message: "Failed to place order",
      error: error.message,
    });
  }
};

const getOrders = async (req, res) => {
  try {
    const OrderList = await ordermodel.find({});

    const productIdSet = new Set();

    OrderList.forEach((order) => {
      if (Array.isArray(order.OrderItems)) {
        order.OrderItems.forEach((item) => {
          if (item._id) productIdSet.add(item._id.toString());
        });
      }
    });

    const uniqueProductIds = Array.from(productIdSet);

    const allProducts = await productModel.find({
      _id: { $in: uniqueProductIds },
    });

    const productMap = new Map();
    allProducts.forEach((product) => {
      productMap.set(product._id.toString(), product);
    });

    const enrichedOrders = OrderList.map((order) => {
      const enrichedItems = order.OrderItems.map((item) => {
        const productInfo = productMap.get(item._id.toString());

        return {
          ...item._doc,
          ...productInfo?._doc,
        };
      });

      return {
        ...order._doc,
        OrderItems: enrichedItems,
      };
    });

    res.json({
      success: true,
      orders: enrichedOrders,
    });
  } catch (error) {
    console.error("Error in getOrders:", error);
    res.json({
      success: false,
      message: `Some Error Occurred: ${error.message}`,
    });
  }
};

module.exports = { AddOrder, getOrders };
