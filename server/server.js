const express = require('express');
const app= express();
const port= process.env.PORT || 4000;
const cors=require('cors');

require('dotenv').config();
const connectDB = require('./config/mongodb.js');
const connectCloudinary=require('./config/cloudinary.js');

const userRouter=require("./routes/UserRoute.js")

const productRouter=require("./routes/ProductRoute.js");

const cartRouter=require('./routes/CartRoute.js');

const orderRouter=require('./routes/OrderRoute.js');




connectDB();
connectCloudinary();


app.use(cors());
app.use(express.json());

app.use("/api/order",orderRouter);

app.use("/api/user",userRouter);
app.use("/api/product",productRouter);
app.use("/api/cart",cartRouter);


app.get('/',(req,res)=>{
    res.send("Server Is Working");
    console.log("res is sended")
})

app.listen(port,()=>{
    console.log(`Server Started on : http://localhost:${port}`);
})

