const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blacklistTokenModel = require("../models/blacklistToken.model");
const captainModel = require("../models/captain.model");

module.exports.authUser = async (req, res, next) => {
  try {
    // Get token from cookies or headers
    const token =
      req.cookies.token ||
      (req.headers.authorization && req.headers.authorization?.split(" ")[1]);

    if (!token) {
      return res.status(401).json({ error: "You are not authenticated" });
    }

    const isBlacklisted = await blacklistTokenModel.findOne({ token: token });

    if (isBlacklisted) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded || !decoded._id) {
      return res.status(403).json({ error: "Invalid token" });
    }

    // Find user
    const user = await userModel.findById(decoded._id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Attach user to request object
    req.user = user;
    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error);
    return res.status(403).json({ error: "Access denied" });
  }
};

module.exports.authCaptain = async (req, res, next) => {
  const token =  req.cookies.token ||
  (req.headers.authorization && req.headers.authorization?.split(" ")[1]);

  if (!token) {
    return res.status(401).json({ error: "You are not authenticated" });
  }

  const isBlacklisted = await blacklistTokenModel.findOne({ token: token });

  if (isBlacklisted) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await captainModel.findById(decoded._id);

    req.captain = captain;

    return next();
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};
