import { verifyToken } from "../utils/jwt.utils.js";
import User from "../models/User.model.js";
const authenticate = async (req,res,next) => {
    try{
        const authHeader = req.headers.authorization;
        if(!authHeader || !authHeader.startsWith("Bearer ")){
            return res.status(401).json({success : false ,message : "Unauthorized"});
        }
        const token = authHeader.split(' ')[1];
        const decoded = verifyToken(token);
        const user = await User.findById(decoded.id);
        if(!user){
            return res.status(401).json({success : false , message : "user not found . please log in again"});

        }
        req.user = user ;
        next();
    }
    catch(error){
        return res.status(401).json({success : false , message : "invalid token or expired token"});
    }
};

export default authenticate;