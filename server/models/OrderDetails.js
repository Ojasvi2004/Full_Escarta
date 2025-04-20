const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const OrderDetails = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    OrderItems: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ordermodel = mongoose.model("Order", OrderDetails);

module.exports = ordermodel;
