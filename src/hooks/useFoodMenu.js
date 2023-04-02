import { useQuery } from "@tanstack/react-query";
import { request } from "../services/api-client";

const getMenu = async () => await request.get("/products");

const useFoodMenu = ({ currentSelect = "全部", dispatch }) => {
    return useQuery({
        queryKey: ["foodMenu"],
        queryFn: getMenu,
        onSuccess: (data) => {
            console.log(data);
            dispatch({ type: "SET_MENU", payload: data });
        },
        select: ({ data }) => {
            const menu =
                currentSelect === "全部"
                    ? data
                    : data.filter((m) => m.category === currentSelect);
            return menu;
        },
    });
};

export default useFoodMenu;
