import { useQuery } from "@tanstack/react-query";
import { request } from "../services/api-client";

const getMenu = async () =>
    await request.get("/products").then((res) => res.data);

const useFoodMenu = (props = {}) => {
    return useQuery({
        queryKey: ["foodMenu"],
        queryFn: getMenu,
        ...props,
    });
};

export default useFoodMenu;
