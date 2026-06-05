import axios from 'axios';
import Cookies from 'js-cookie';
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
const getHeader = () => {
    const token = Cookies.get("token");
    return token ? {
        Authorization: `Bearer ${token}`
    } : {};
};
const api = {
    get : async(url) => {
        const path = url.startsWith('/') ? url : `/${url}`;
        const response = await axios.get(`${BASE_URL}${path}`, {
            headers : getHeader()
        });
        return response;
    },
    post : async(url,data) => {
        const path = url.startsWith('/') ? url : `/${url}`;
        const response = await axios.post(`${BASE_URL}${path}`, data, {
            headers : getHeader()
        });
        return response;
    },
    put : async(url,data) => {
        const path = url.startsWith('/') ? url : `/${url}`;
        const response = await axios.put(`${BASE_URL}${path}`, data, {
            headers : getHeader()
        });
        return response;
    },
    delete : async(url) => {
        const path = url.startsWith('/') ? url : `/${url}`;
        const response = await axios.delete(`${BASE_URL}${path}`, {
            headers : getHeader()
        });
        return response;
    }
};
export default api;