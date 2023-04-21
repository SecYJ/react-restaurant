import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CtxWrapper from "../contexts/CtxWrapper";
import CartWrapper from "../components/cart/CartWrapper";

const Layout = () => {
    return (
        <CtxWrapper>
            <CartWrapper>
                <Header />
                <Outlet />
                <Footer />
            </CartWrapper>
        </CtxWrapper>
    );
};
export default Layout;
