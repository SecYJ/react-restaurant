import { useMenuCtx } from "../../contexts/MenuCtx";
import MenuCard from "./MenuCard";
import useFoodMenu from "../../hooks/useFoodMenu";
import MenuSkeleton from "./MenuSkeleton";
import { useRef } from "react";

const MenuGrid = () => {
    const { dispatch, filtered_menu, search } = useMenuCtx();
    const { isLoading, isFetching } = useFoodMenu(setMenu);
    const ref = useRef(null);

    function setMenu(data) {
        dispatch({ type: "SET_MENU", payload: data });
    }

    if (isLoading || isFetching) {
        return <MenuSkeleton />;
    }

    if (filtered_menu.length < 1 && search !== "") {
        return <p>没有符合您寻找的食品，请再查询</p>;
    }

    return (
        <ul className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
            {filtered_menu.map((d) => {
                return <MenuCard menuData={d} key={d.id} testRef={ref} />;
            })}
        </ul>
    );
};

export default MenuGrid;
