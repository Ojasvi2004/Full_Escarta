const cloudinary=require("cloudinary");

const connectCloudinary= async()=>{

  try {
    cloudinary.config({
        cloud_name:process.env.CLOUDINARY_NAME,
        api_key:process.env.CLOUDINARY_API_KEY,
        api_secret:process.env.CLOUDINARY_SECRET_KEY,
    })
    console.log("Cloudinary Connected");
    
  } catch (error) {
    console.log(`Error occurred when connecting to cloudinary:${error}`);
    process.exit(1);
  }
    

}

module.exports=connectCloudinary;