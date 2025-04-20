const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const AddToCart = async (req, res) => {

    try {

        const { itemId, size } = req.body;

        const auth = req.headers.authorization;

        const token = auth.split(" ")[1];

        const token_decode = jwt.verify(token, process.env.JWTSECRET_Access);

        const userId = token_decode.id;

        const userData = await User.findById(userId);


        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        let cartData = await userData.cartData;

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;

            }
            else {
                cartData[itemId][size] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        await User.findByIdAndUpdate(userId, { cartData })

        return res.json({ success: true, message: "Added to cart" });

    } catch (error) {

        console.log(error);
        res.json({ success: false, message: error.message });

    }

};

const UpdateCart = async (req, res) => {

    try {
        const { itemId, size, quantity } = req.body;

        const auth = req.headers.authorization;

        const token = auth.split(" ")[1];

        const token_decode = jwt.verify(token, process.env.JWTSECRET_Access);

        const userId = token_decode.id;

        const userData = await User.findById(userId);

        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData;


        cartData[itemId][size] = quantity;

        await User.findByIdAndUpdate(userId, { cartData })

        return res.json({ success: true, message: "Cart Updated" });

    } catch (error) {



        console.log(error);
        res.json({ success: false, message: error.message });

    }



};


const GetUserCart = async (req, res) => {

    try {

        const auth = req.headers.authorization;

        const token = auth.split(" ")[1];

        const token_decode = jwt.verify(token, process.env.JWTSECRET_Access);

        const userId = token_decode.id;

        const userData = await User.findById(userId);
        let cartData = await userData.cartData;
        return res.json({ success: true, cartData });


    } catch (error) {


        console.log(error);
        res.json({ success: false, message: error.message });


    };};

    const DeleteFromCart = async (req, res) => {
        try {
          const { itemId, size } = req.body;
          const token = req.headers.authorization.split(" ")[1];
          const decoded = jwt.verify(token, process.env.JWTSECRET_Access);
          const userId = decoded.id;
      
          const user = await User.findById(userId);
          let cartData = user.cartData;
      
          if (cartData[itemId] && cartData[itemId][size]) {
            delete cartData[itemId][size];
      
            if (Object.keys(cartData[itemId]).length === 0) {
              delete cartData[itemId];
            }
          }
      
          await User.findByIdAndUpdate(userId, { cartData });
      
          return res.json({ success: true, message: "Item removed from cart" });
        } catch (error) {
          console.log(error);
          return res.json({ success: false, message: error.message });
        }
      };
    
module.exports = { AddToCart, UpdateCart, GetUserCart, DeleteFromCart };