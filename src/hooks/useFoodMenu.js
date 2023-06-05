import { useQuery } from "@tanstack/react-query";
import { request } from "../services/api-client";

const getMenu = async () =>
    await request.get("/products").then((res) => res.data);

const useFoodMenu = ({ onSuccess } = {}) => {
    return useQuery({
        queryKey: ["foodMenu"],
        queryFn: getMenu,
        onSuccess,
    });
};

export default useFoodMenu;
