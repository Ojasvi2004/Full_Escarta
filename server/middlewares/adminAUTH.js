const express = require("express");
const jwt = require("jsonwebtoken");

const adminAUTH = async (req, res, next) => {

    try {
        const accesstoken = req.headers.authorization?.split(' ')[1];

        console.log(accesstoken);





        if (!accesstoken) {
            return res.status(402).json({ success: false, message: "Not Authorized Login again with acesstoken" });
        }

        const access_token_decode = jwt.verify(accesstoken, process.env.JWTSECRET_Access);





        if (access_token_decode.email != process.env.ADMIN_EMAIL || access_token_decode.password != process.env.ADMIN_PASSWORD) {
            return res.status(402).json({ success: false, message: "Not Authorized Login again" });
        }

        next();

    } catch (error) {

        return res.status(400).send("Some Error occured while authenticating of admin :" + error);
    }

}

module.exports = adminAUTH;

