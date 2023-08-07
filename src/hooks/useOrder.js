import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const useOrder = () => {
    const apiClient = new APIClient("/orders");

    return useMutation({
        mutationFn: apiClient.postOrder.bind(apiClient),
    });
};

export default useOrder;
