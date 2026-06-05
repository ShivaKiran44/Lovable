import {Router} from "express";
import authenticate from "../middleware/auth.middleware.js";
import {registerUser,LoginUser,getUser,logoutUser} from "../controllers/auth.controller.js";
const router = Router();
router.post("/register",registerUser);
router.post("/login",LoginUser);
router.get("/me",authenticate,getUser);
router.post("/logout",authenticate,logoutUser);
export default router;