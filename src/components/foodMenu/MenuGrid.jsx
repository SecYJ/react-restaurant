import { AnimatePresence } from "framer-motion";
import { useMenuCtx } from "../../contexts/MenuCtx";
import { useCartCtx } from "../../contexts/CartCtx";
import FloatingCartButton from "../cart/FloatingCartButton";
import MenuCard from "./MenuCard";
import Cart from "../cart/Cart";
import useFoodMenu from "../../hooks/useFoodMenu";
import MenuSkeleton from "./MenuSkeleton";

const MenuGrid = () => {
    const { dispatch, filtered_menu, search } = useMenuCtx();
    const { cartVisible: visible } = useCartCtx();
    const onSuccess = (data) => {
        dispatch({ type: "SET_MENU", payload: data.data });
    };
    const { isLoading } = useFoodMenu({ onSuccess });

    if (isLoading) {
        return <MenuSkeleton />;
    }

    if (filtered_menu < 1 && search !== "") {
        return <p>没有符合您寻找的食品，请在查询</p>;
    }

    return (
        <>
            <ul className="grid grid-cols-3 gap-8">
                {filtered_menu.map((d) => {
                    return <MenuCard {...d} key={d.id} />;
                })}
            </ul>
            {!visible && <FloatingCartButton />}
            <AnimatePresence>{visible && <Cart />}</AnimatePresence>
        </>
    );
};

export default MenuGrid;
