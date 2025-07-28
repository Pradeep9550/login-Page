const jwt = require("jsonwebtoken")
const authMiddleware = (req, res, next) =>{
    try {
        const token = req.headers.authorization;
        if(!token){
            return res.json({message: "no token provide"})
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = decode.id
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token", success: false });
    }

}
 module.exports = authMiddleware