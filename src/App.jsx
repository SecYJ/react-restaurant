import { RouterProvider } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useCartCtx } from "./contexts/CartCtx";
import router from "./router";
import FloatingCartButton from "./components/cart/FloatingCartButton";
import Cart from "./components/cart/Cart";

const App = () => {
    const { cartVisible: visible } = useCartCtx();

    return (
        <>
            <RouterProvider router={router} />
            {!visible && <FloatingCartButton />}
            <AnimatePresence>{visible && <Cart />}</AnimatePresence>
        </>
    );
};
export default App;
