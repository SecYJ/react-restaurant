import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CtxWrapper from "../contexts/CtxWrapper";
import CartWrapper from "../components/cart/CartWrapper";
import { useAuth0 } from "@auth0/auth0-react";

const Layout = () => {
    return (
        <CtxWrapper>
            <CartWrapper>
                <Children />
            </CartWrapper>
        </CtxWrapper>
    );
};

const Children = () => {
    const { isLoading } = useAuth0();

    // TODO: Replace loading text with loading icon or gif
    if (isLoading) return <p>Loading...</p>;

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};
export default Layout;
