import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const useOrder = (onPost) => {
    const apiClient = new APIClient("/orders");

    return useMutation({
        mutationFn: apiClient.postOrder.bind(apiClient),
        onSuccess: () => onPost(),
    });
};

export default useOrder;
