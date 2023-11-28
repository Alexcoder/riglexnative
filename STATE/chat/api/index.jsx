import axios from "axios";

// const baseURL = `http://localhost:5000/api`;
const baseURL = `https://riglex.onrender.com/api`;    

// const baseURL = process.env.VITE_REACT_APP_BASE_URL
const token = JSON.parse(localStorage.getItem("riglex"))?.token;
// console.log("indexToken", token)

export const publicApi = axios.create({ baseURL });
export const userApi = axios.create({
    baseURL,
    headers : token,
});