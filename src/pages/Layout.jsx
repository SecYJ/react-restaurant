import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CtxWrapper from "../contexts/CtxWrapper";

const Layout = () => {
    return (
        <CtxWrapper>
            <div className="flex h-screen flex-col overflow-y-auto">
                <Header />
                <main className="relative grow">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </CtxWrapper>
    );
};

export default Layout;
