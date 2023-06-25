import { useMenuCtx } from "../../contexts/MenuCtx";
import MenuCard from "./MenuCard";
import useFoodMenu from "../../hooks/useFoodMenu";
import MenuSkeleton from "./MenuSkeleton";

const MenuGrid = () => {
    const { dispatch, filtered_menu, search } = useMenuCtx();
    const { isLoading } = useFoodMenu({
        onSuccess: (data) => dispatch({ type: "SET_MENU", payload: data }),
    });

    if (isLoading) {
        return <MenuSkeleton />;
    }

    if (filtered_menu.length < 1 && search !== "") {
        return <p>没有符合您寻找的食品，请在查询</p>;
    }

    return (
        <ul className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
            {filtered_menu.map((d) => {
                return <MenuCard menuData={d} key={d.id} />;
            })}
        </ul>
    );
};

export default MenuGrid;
