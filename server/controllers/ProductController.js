const { json } = require("express");
const producModel = require("../models/product");
const { parse } = require("postcss");
const productModel = require("../models/product");
const cloudinary = require("cloudinary").v2;

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    console.log(req.body);

    const parsedPrice = Number(price);
    if (isNaN(parsedPrice)) {
      return res.status(400).json({ success: false, message: "Invalid price" });
    }
    const Image1 = req.files.Image1 ? req.files.Image1[0].path : null;
    const Image2 = req.files.Image2 ? req.files.Image2[0].path : null;
    const Image3 = req.files.Image3 ? req.files.Image3[0].path : null;
    const Image4 = req.files.Image4 ? req.files.Image4[0].path : null;

    const images = [Image1, Image2, Image3, Image4].filter(
      (item) => item != undefined
    );

    let imagesURL = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    console.log(
      name,
      description,
      parsedPrice,
      category,
      subCategory,
      sizes,
      bestseller
    );

    let parsedSizes;

    try {
      const temp = JSON.parse(sizes);
      parsedSizes = Array.isArray(temp) ? temp.join(",") : temp;
    } catch (error) {
      parsedSizes = temp;
    }

    const myProductdata = {
      name,
      price,
      description,
      image: imagesURL,
      category,
      subCategory,
      sizes: parsedSizes,
      bestseller: bestseller == "true" ? true : false,
      date: Date.now(),
    };

    const newProduct = new producModel(myProductdata);

    await newProduct.save();

    console.log(newProduct);

    return res.json({ success: true, message: "Product Added" });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: `Error:${error.message}` });
  }
};

const removeProduct = async (req, res) => {
  try {
    const MYproduct = await productModel.findByIdAndDelete(req.body._id);

    return res
      .status(200)
      .json({ success: true, message: "This Product Deleted", MYproduct });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: `Error is:${error.message}` });
  }
};

const listProducts = async (req, res) => {
  try {
    const allProduct = await producModel.find({});

    res.status(200).json({ success: true, allProduct });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: `Error:${error.message}` });
  }
};

const singleProduct = async (req, res) => {
  try {
    const thisProduct = await producModel.findById(req.body._id);

    res.status(200).json({ success: true, thisProduct });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: `Error:${error.message}` });
  }
};

module.exports = { addProduct, listProducts, singleProduct, removeProduct };
