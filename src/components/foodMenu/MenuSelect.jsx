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

    const categories = [
        "全部",
        ...new Set(foodMenu.data.map((p) => p.category)),
    ];

    return (
        <>
            <ul className="menu">
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
                                    ? "border-l-4 bg-primary/20 text-black/70 enabled:hover:bg-primary/20"
                                    : "border-l-4 border-transparent bg-transparent text-black/70 enabled:hover:bg-primary/20"
                            }`}
                        >
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
    // return (
    //     <>
    //         <ul className="menu">
    //             {categories.map((item) => (
    //                 <li
    //                     key={item}
    //                     className={currentSelect === item ? "bordered" : ""}
    //                 >
    //                     <button
    //                         type="button"
    //                         onClick={() => {
    //                             dispatch({
    //                                 type: "SORT_BY_CATEGORY",
    //                                 payload: item,
    //                             });
    //                         }}
    //                         className={`${
    //                             currentSelect === item
    //                                 ? "border-l-4 bg-primary/20 text-black/70 enabled:hover:bg-primary/20"
    //                                 : "border-l-4 border-transparent bg-transparent text-black/70 enabled:hover:bg-primary/20"
    //                         } ${
    //                             isLoading && item !== "全部"
    //                                 ? "disabled:opacity-50"
    //                                 : ""
    //                         }`}
    //                         // disabled={isProductsEmpty && item !== "全部"}
    //                         disabled={isLoading}
    //                     >
    //                         {item}
    //                     </button>
    //                 </li>
    //             ))}
    //         </ul>
    //     </>
    // );
};
export default MenuSelect;
