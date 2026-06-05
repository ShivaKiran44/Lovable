import * as authService from "../services/auth.service.js";
export const registerUser = async (req,res,next) => {
    try {
        console.log('[auth] registerUser body:', req.body);
        const {name,email,password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({success : false , message : "all are required"})
        }
        if(password.length < 6){
            return res.status(400).json({success : false , message : "password must be at least 6 characters"});
        }
        const result = await authService.register(name,email,password);
        return res.status(201).json({success : true , data: result}); }
        catch(error){
            if(error.statusCode){
                return res.status(error.statusCode).json({success : false , message : error.message})
            }
            next(error);
        }
    }
export const LoginUser = async (req,res,next) => {
    try {
        console.log('[auth] LoginUser body:', req.body);
        const { email,password } = req.body;
        if(!email || !password){
            return res.status(400).json({success : false , message : "all are required"})
        }
        
        const result = await authService.login(email,password);
        return res.status(200).json({success : true , data: result}); }
        catch(error){
            if(error.statusCode){
                return res.status(error.statusCode).json({success : false , message : error.message})
            }
            next(error);
        }
    }
export const getUser = async (req,res,next) => {
    try {
        const result = await authService.getProfile(req.user._id);
        return res.status(200).json({success : true , data : result});}
        catch(error){
            next(error);
        }
    }
export const logoutUser = async (req,res,next) => {
    try {
        return res.status(200).json({success:true , data : {message : "logout successfully"}});
    }
    catch(error){ 
        next(error);
    }
}