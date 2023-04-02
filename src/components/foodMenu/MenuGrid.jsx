import ProductCard from "./MenuCard";
import SkeletonPost from "../skeleton/SkeletonPost";
import { useMenuCtx } from "../../contexts/MenuCtx";
import Cart from "../cart/Cart";
import { useCartCtx } from "../../contexts/CartCtx";
import FoodCartButton from "../FoodCartButton";
// import { getProducts } from "../services/api-client.js";
import { AnimatePresence } from "framer-motion";
import useFoodMenu from "../../hooks/useFoodMenu";
import MenuSkeleton from "./MenuSkeleton";

const MenuGrid = () => {
    const { currentSelect, dispatch } = useMenuCtx();
    // const { cartVisible: visible } = useCartCtx();
    const { isLoading, data: menu } = useFoodMenu({ dispatch });

    if (isLoading) {
        return <MenuSkeleton />;
    }

    const filtered_menu =
        currentSelect === "全部"
            ? menu
            : menu.filter((d) => d.category === currentSelect);

    if (filtered_menu < 1 && search !== "") {
        return <p>没有符合您寻找的食品，请在查询</p>;
    }
    // if (filtered_menu.length < 1 && search !== "") {
    //     return <p>没有符合您寻找的食品，请在查询</p>;
    // }

    return (
        <>
            <ul className="grid grid-cols-3 gap-8">
                {filtered_menu.map((d) => {
                    return <ProductCard {...d} key={d.id} />;
                })}
                {/* {filtered_products.map((d) => {
                    return <ProductCard {...d} key={d.id} />;
                })} */}
            </ul>
            {/* {!visible && <FoodCartButton />} */}
            {/* <AnimatePresence>{visible && <Cart />}</AnimatePresence> */}
        </>
    );
};

export default MenuGrid;

// https://fs1.app/videos/juq-219/
