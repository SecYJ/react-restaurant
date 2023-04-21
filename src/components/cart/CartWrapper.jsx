import { AnimatePresence } from "framer-motion";
import { useCartCtx } from "../../contexts/CartCtx";
import Cart from "./Cart";

const CartWrapper = ({ children }) => {
    const { cartVisible: visible } = useCartCtx();

    return (
        <>
            {children}
            <AnimatePresence>{visible && <Cart />}</AnimatePresence>
        </>
    );
};

export default CartWrapper;
