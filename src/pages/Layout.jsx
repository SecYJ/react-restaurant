import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useCartCtx } from "../contexts/CartCtx";
import Cart from "../components/cart/Cart";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => {
    const { cartVisible: visible } = useCartCtx();
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <AnimatePresence>{visible && <Cart />}</AnimatePresence>
        </>
    );
};
export default Layout;
