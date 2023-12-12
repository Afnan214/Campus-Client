import axios from 'axios'
// export const getToken = () => localStorage.getItem("token")
//     ? JSON.parse(localStorage.getItem("token"))
//     : null;

// export const getAuthorizationHeader = () => `Bearer ${getToken()}`;
export default axios.create({
    baseURL: "http://localhost:5001",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    },
    withCredentials: true
    // headers: { Authorization: getAuthorizationHeader() },
    // withCredentials: true
})