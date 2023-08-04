import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/dim.png";
import { useCartCtx } from "../contexts/CartCtx";
import useMediaQuery from "../hooks/useMediaQuery";
import Avatar from "./Avatar";
import MobileNavButton from "./MobileNavButton";
import MobileNavMenu from "./MobileNavMenu";
import Navbar from "./Navbar.jsx";

const Header = () => {
    const { totalUnits } = useCartCtx();
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    const matchMedia = useMediaQuery("(min-width: 1024px)");

    const toggleVisibility = () => setVisible((c) => !c);

    return (
        <header className="navbar sticky top-0 left-0 z-[2] bg-primary text-white">
            <div className="container flex justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <img src={logo} className="h-9 w-9 object-cover" />
                    <p className="mr-4">满味芳</p>
                </Link>
                <div className="flex items-center">
                    <button
                        type="button"
                        onClick={() => navigate("/cart")}
                        className="btn-ghost btn-circle btn lg:hidden"
                    >
                        <div className="indicator">
                            <AiOutlineShoppingCart size="24px" color="white" />
                            <span className="badge badge-sm indicator-item border-transparent bg-secondary">
                                {totalUnits}
                            </span>
                        </div>
                    </button>
                    {!matchMedia && <Avatar />}
                    <MobileNavButton
                        visible={visible}
                        toggleVisibility={toggleVisibility}
                    />
                    <AnimatePresence>
                        {visible && (
                            <MobileNavMenu
                                visible={visible}
                                toggleVisibility={toggleVisibility}
                            />
                        )}
                    </AnimatePresence>
                    <Navbar />
                </div>
            </div>
        </header>
    );
};
export default Header;
