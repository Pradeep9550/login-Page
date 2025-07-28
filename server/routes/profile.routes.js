const express = require("express");
const authMiddleware = require("../middleware/authMiddleware.js");
const UserModel = require("../models/user.model.js");

const router = express.Router();

router.get("/", authMiddleware,async (req, res)=>{
      try {
        const user = await UserModel.findById(req.userId).select("-password");
        if(!user) {
            return res.json({message : "User not found"})
        }

        res.status(200).json({user, success: true})
      } catch (error) {
        res.status(500).json({message: error, success: false})
      }
})

module.exports = router