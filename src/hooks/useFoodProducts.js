import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/api-client";

const useFoodProducts = () => {
    return useQuery({
        queryKey: ["getProducts"],
        queryFn: getProducts,
    });
};

export default useFoodProducts;
