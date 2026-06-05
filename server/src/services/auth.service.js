import bcrypt from 'bcryptjs';
import {generateToken} from "../utils/jwt.utils.js";
import User from "../models/User.model.js";
export const register = async (name,email,password) => {
    const existing = await User.findOne({email});
    if(existing){
        const error = new Error("Email Already Exists");
        error.statusCode = 400;
        throw error;
    }
    const hashedPassword = await  bcrypt.hash(password,10);
    const user = await User.create({name,email,password : hashedPassword});
    const token = generateToken(user);
    return {
        token,
        user : {
            id : user._id,
            name : user.name,
            email : user.email      }
    };
};
export const login = async (email,password) => {
    const user = await User.findOne({email});
    if(!user) {
        const error = new Error("Register first");
        error.statusCode = 401;
        throw error;
    }
    const ismatch = await bcrypt.compare(password ,user.password);
    if(!ismatch){
        const error = new Error("Invalid Password");
        error.statusCode = 401;
        throw error;
    }
    user.lastLogin = new Date();
    await user.save();
    const token = generateToken(user);
    return {
        token,
        user : {
            id : user._id,
            name : user.name,
            email : user.email
        }
    };
};
export const getProfile = async (userId) => {
    const user = await User.findById(userId);
    if(!user){
        const error = new Error("User Not Found");
        error.statusCode = 404;
        throw error;
    }
    return {
        id : user._id,
        name : user.name,
        email : user.email,
        lastLogin : user.lastLogin,
        createdAt : user.createdAt
    };
};