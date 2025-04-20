const express=require('express');
const { GetUserCart, AddToCart, UpdateCart, DeleteFromCart } = require('../controllers/cartController');
const userAUTH = require('../middlewares/userAUTH');



const router=express.Router();

router.post('/get',userAUTH,GetUserCart);
router.post('/delete', userAUTH, DeleteFromCart);

router.post('/add',userAUTH,AddToCart);
router.post('/update',userAUTH,UpdateCart);


module.exports=router;