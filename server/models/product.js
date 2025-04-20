const mongoose=require("mongoose");

const product= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:Array,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    subCategory:{
        type:String,
        required:true,
    },
    sizes:{
        type:String,
        required:true,
    },
    bestseller:{
        type:Boolean,
    },
    date:{
        type:Number,
        required:true,
    }
},
{
    timestamps:true,
})

const productModel= mongoose.model("Product",product);

module.exports=productModel;