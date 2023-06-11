import axios from "axios";

export const request = axios.create({
    baseURL: "https://react-restaurant-json-server.onrender.com",
});
