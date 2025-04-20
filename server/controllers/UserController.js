const User = require("../models/User");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { json } = require("express");
const Refresh_Expiry = "10d";
const Access_Expiry = "3h";

const CreateToken = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found while generating token.");
  }

  const payload = { email, id: user._id };

  const RefreshToken = jwt.sign(payload, process.env.JWTSECRET_Refresh, {
    expiresIn: Refresh_Expiry,
  });
  const AccessToken = jwt.sign(payload, process.env.JWTSECRET_Access, {
    expiresIn: Access_Expiry,
  });

  return { RefreshToken, AccessToken };
};

const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        success: false,
        message: "Both Email and Password is required",
      });
    }

    const myuser = await User.findOne({ email });

    if (!myuser) {
      return res.json({ success: false, message: "Email is not registered." });
    }

    const matched = bcrypt.compareSync(password, myuser.Hashedpassword);

    if (matched) {
      const accessToken = (await CreateToken(email, password)).AccessToken;
      const refreshToken = (await CreateToken(email, password)).RefreshToken;

      return res.json({
        success: true,
        message: "Login Successfully",
        accessToken,
        refreshToken,
      });
    } else {
      return res.json({
        success: false,
        message: "Email or Password is Incorrect",
      });
    }
  } catch (error) {
    return res.json({
      success: false,
      message: `Some Error Occured: ${error}`,
    });
  }
};

const RegisterUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Step 1: Check for empty fields
    if (!username || !email || !password) {
      return res.json({ success: false, message: "All fields are required" });
    }

    // Step 2: Validate email format
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter a valid email." });
    }

    // Step 3: Validate password strength
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password.",
      });
    }

    // Step 4: Check if email already exists in DB
    const existes = await User.findOne({ email });
    if (existes) {
      return res.json({
        success: false,
        message: "Given Email is already registered.",
      });
    }

    // Step 5: Hash password and save user
    const usersalt = await bcrypt.genSalt(10);
    const hashedpass = await bcrypt.hash(password, usersalt);

    const myUser = new User({
      name: username,
      email: email,
      Hashedpassword: hashedpass,
      salt: usersalt,
    });

    const user = await myUser.save();

    // Step 6: Generate tokens
    const { AccessToken, RefreshToken } = await CreateToken(email, password);

    return res.json({
      success: true,
      Access_Token: AccessToken,
      Refresh_Token: RefreshToken,
    });

  } catch (error) {
    console.error("Register error:", error);
    return res.json({
      success: false,
      message: "Some error occurred while registering the user",
    });
  }
};


const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(401)
        .json({ success: false, message: "Enter both email and password" });
    }

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const Accesstoken = jwt.sign(
        { email, password },
        process.env.JWTSECRET_Access,
        { expiresIn: Access_Expiry }
      );
      const Refreshtoken = jwt.sign(
        { email, password },
        process.env.JWTSECRET_Refresh,
        { expiresIn: Refresh_Expiry }
      );

      return res.status(200).json({
        success: true,
        message: "Admin logged in",
        Accesstoken,
        Refreshtoken,
      });
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Enter correct email and password" });
    }
  } catch (error) {
    return res
      .status(400)
      .send("Some Error occured while login of admin :" + error);
  }
};

module.exports = { RegisterUser, CreateToken, LoginUser, adminLogin };
