import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const useFoodMenu = (callback) => {
    const apiClient = new APIClient("/products");

    return useQuery({
        queryKey: ["foodMenu"],
        queryFn: apiClient.getFoodMenu.bind(apiClient),
        onSuccess: callback,
    });
};

export default useFoodMenu;
