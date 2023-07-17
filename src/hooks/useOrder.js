import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const useOrder = (onOrder) => {
    const apiClient = new APIClient("/orders");

    return useMutation({
        mutationFn: apiClient.postOrder.bind(apiClient),
        onSuccess: () => onOrder(),
    });
};

export default useOrder;
