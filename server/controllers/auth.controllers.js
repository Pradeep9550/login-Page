const UserModel = require("../models/user.model.js");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const signup =async (req, res) =>{
    try {
        const {name, email, password, confirmPassword} = req.body;
        if(password !== confirmPassword){
            return res.json({message: "Password does't match", success: false})
        }
    
        const existuser = await UserModel.findOne({email})
        if(existuser){
            return res.json({message: "email already used", success: false})
        }
    
        const hashedPassword = await bcrypt.hash(password, 10)
    
        const user = await UserModel.create({name, email, password:hashedPassword})
    
        const token = jwt.sign(
            { id : user._id},
            process.env.JWT_SECRET,
            {expiresIn :"1d"}
        );
    
        res.status(200).json({user : {name:user.name, email : user.email}, success: true, token})
    } catch (error) {
        res.status(500).json({message :" Internal server error", success : false, error})
    }
}

const signin =async (req, res)=>{
    try {
        const {email, password} = req.body
        const user = await UserModel.findOne({email})
        if(!user){
            return res.json({message:"not signup", success: false})
        }

        const checkPassword = await bcrypt.compare(password, user.password)
        if(!checkPassword){
            return res.json({message : "Invalid password",success:false})
        }

        const token = jwt.sign(
            { id : user._id},
            process.env.JWT_SECRET,
            {expiresIn : "1d"}
        )

        res.status(200).json({user : {name : user.name, email : user.email}, token, success: true})

    } catch (error) {
        res.status(500).json({message :" Internal server error", success: false})
    }
}

module.exports = {signup, signin}