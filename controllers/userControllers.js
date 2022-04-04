const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    let { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const exist = await User.findOne({ email }, { password: 0 });

    if (!exist) {
      const newUser = new User({
        email,
        password: hashedPassword,
      });
      await newUser.save();
      res.status(201).json({
        message: "User created successfully",
        user: {
          email: newUser.email,
          _id: newUser._id,
          role: newUser.role,
        },
      });
    } else {
      res.status(409).json({
        message: "User already exist",
        user: exist,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).json({
        message: "Authentication Failed",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(401).json({
        message: "Authentication Failed",
      });
    } else {
      const token = jwt.sign(
        {
          email: user.email,
          _id: user._id,
          role: user.role,
        },
        process.env.JWT_SECRET,

        {
          expiresIn: "1h",
        }
      );

      res.status(200).json({
        message: "Logged in successfully",
        user: {
          token: token,
          email: user.email,
          _id: user._id,
          role: user.role,
        },
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

exports.profile = async (req, res) => {
  const id = req.decoded._id;
  try {
    const user = await User.findById(id, { password: 0 });
    res.status(200).json({
      message: "Profile retrieved successfully",
      user: user,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
