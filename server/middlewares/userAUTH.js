const jwt=require('jsonwebtoken');


const userAUTH=async(req,res,next)=>{

    const auth= req.headers.authorization;

    const token=auth.split(" ")[1];

    if (!token) {
        return res.json({success:false,message:"Login to Shop"});

    }

    try {
        const token_decode=jwt.verify(token,process.env.JWTSECRET_Access);

        if (req.body.email=token_decode.email ) {
            console.log("User Verified");
        }
        next();
        
        
    } catch (error) {

        console.log(error);
        return res.json({success:false,message:error.message});
        
    }
    

}

module.exports=userAUTH;