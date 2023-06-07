import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CtxWrapper from "../contexts/CtxWrapper";
// import CartWrapper from "../components/cart/CartWrapper";
import Loading from "../assets/loading.svg";

const Layout = () => {
    return (
        <CtxWrapper>
            {/* <CartWrapper> */}
            <Children />
            {/* </CartWrapper> */}
        </CtxWrapper>
    );
};

const Children = () => {
    const { isLoading } = useAuth0();

    // if (isLoading)
    //     return (
    //         <div className="grid min-h-screen place-items-center">
    //             <img src={Loading} alt="Loading" />
    //         </div>
    //     );

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
export default Layout;
