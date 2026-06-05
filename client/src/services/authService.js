 import api from "./api.js";
 const register = async (name,email,password) => {
    const response = await api.post("auth/register",{name,email,password});
    return response.data.data;
 }
 const login = async (email,password) => {
    const response = await api.post("/auth/login", {email,password});
    return response.data.data
 }
 const getProfile = async () => {
    const response = await api.get("/auth/me");
    return response.data.data;
 }
 const  logout = async () => {
    const response = await api.post("/auth/logout");
    return  response.data;
 }
// provide backward-compatible export names used across the app
const getMe = getProfile;
const emailLogin = login;

export { register, login, getProfile, logout, getMe, emailLogin };
