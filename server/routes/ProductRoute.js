
const express=require("express");

const router=express.Router();

const {addProduct,listProducts,singleProduct,removeProduct}=require("../controllers/ProductController");
const { upload } = require("../middlewares/multer");
const adminAUTH = require("../middlewares/adminAUTH");

router.post("/add",adminAUTH,upload,addProduct);
router.post("/remove",adminAUTH,removeProduct);
router.get("/single",singleProduct);
router.get("/list",listProducts);

module.exports=router;

