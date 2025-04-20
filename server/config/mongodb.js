const mongoose=require('mongoose');

const connectDB=async (req,res) => {

   try {
    mongoose.connection.on('connected',()=>{
        console.log("Someone Connected");
    })
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    
   } catch (error) {
    console.log(`Error occurred when connecting to database:${error}`);
    process.exit(1);
   }
    
}
module.exports=connectDB;