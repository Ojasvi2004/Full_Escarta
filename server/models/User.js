const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    Hashedpassword:{
        type:String,
        required:true,
    },
    cartData:{
        type:Object,
        default:{},
    },
    salt:{
        type:String,
        required:true,
    }
},
{
    timestamps:true,
    minimize:false,
})

const User=new mongoose.model("User",UserSchema);
module.exports=User;