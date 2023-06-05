import { useMenuCtx } from "../../contexts/MenuCtx";
import useFoodMenu from "../../hooks/useFoodMenu";
import Skeleton from "../skeleton/Skeleton";

const MenuSelect = () => {
    const { currentSelect, dispatch } = useMenuCtx();
    const { isLoading, data: foodMenu } = useFoodMenu();

    if (isLoading) {
        return [...Array(5).keys()].map((i) => (
            <Skeleton key={i} classes="h-14" />
        ));
    }

    const categories = ["全部", ...new Set(foodMenu.map((p) => p.category))];

    return (
        <>
            <ul className="menu flex-row lg:flex-col">
                {categories.map((item) => (
                    <li
                        key={item}
                        className={currentSelect === item ? "bordered" : ""}
                    >
                        <button
                            type="button"
                            onClick={() => {
                                dispatch({
                                    type: "SORT_BY_CATEGORY",
                                    payload: item,
                                });
                            }}
                            className={`${
                                currentSelect === item
                                    ? "border-b-4 border-l-0 bg-primary/20 text-black/70 enabled:hover:bg-primary/20 lg:border-l-4 lg:border-b-0"
                                    : "border-b-4 border-transparent bg-transparent text-black/70 enabled:hover:bg-primary/20 lg:border-l-4 lg:border-b-0"
                            }`}
                        >
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};
export default MenuSelect;
