import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://react-restaurant-json-server.onrender.com",
});

class APIClient {
    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    getFoodMenu() {
        return axiosInstance.get(this.endpoint).then((res) => res.data);
    }

    postOrder() {
        return axiosInstance.post(this.endpoint).then((res) => res.data);
    }
}

export default APIClient;
