const express = require("express");
const { AddOrder, getOrders } = require("../controllers/OrderController");
const userAUTH = require("../middlewares/userAUTH");
const router = express.Router();

router.post("/placemyorder", userAUTH, AddOrder);
router.get("/getALLorders", getOrders);

module.exports = router;
