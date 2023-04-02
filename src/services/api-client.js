import axios from "axios";

const request = axios.create({
    baseURL: "http://localhost:3000",
});

export const getProducts = async () => await request.get("/products");
