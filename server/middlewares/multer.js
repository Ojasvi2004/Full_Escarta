const multer=require("multer");

const path=require("path");

const crypto=require("crypto");


const storage=multer.diskStorage({

    destination: function (req,file,cb) {
        cb(null,"Uploads/Images");
    },

    filename: function (req,file,cb) {
        crypto.randomBytes(16,(error,buff)=>{
            if (error) {
                return cb(error);
            }
            else{
                const name=req.body.name;
                const thisfilename=name+buff.toString("hex")+path.extname(file.originalname);

                cb(null,thisfilename);

            }

        })
    },

  
})

const upload=multer({
    storage,
    limits:{}
}).fields(
    [
        { name:"Image1",maxCount: 1 },
        {name:"Image2" , maxCount:1 },
        {name:"Image3",maxCount:1},
        { name:"Image4",maxCount:1 }
    ]
);

module.exports={storage,upload};