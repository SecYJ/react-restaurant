import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCartCtx } from "../contexts/CartCtx";
import { menu } from "../constants/headerNavList";
import Avatar from "./Avatar";
import MobileNavMenu from "./MobileNavMenu";
import useMediaQuery from "../hooks/useMediaQuery";

const Navbar = () => {
    const navigate = useNavigate();
    const { totalUnits } = useCartCtx();
    const [menuVisible, setMenuVisible] = useState(false);
    const matchMedia = useMediaQuery("(min-width:1024px)");

    return (
        <>
            <div className="mr-3 hidden items-center gap-3 justify-self-end lg:flex">
                {menu.map((m) => (
                    <button
                        type="button"
                        className="btn-ghost btn-circle btn font-normal"
                        key={m.text}
                        onClick={() => {
                            setMenuVisible(false);
                            navigate(m.link);
                        }}
                    >
                        {m.text}
                    </button>
                ))}
            </div>

            <button
                type="button"
                className={`${
                    menuVisible ? "swap-active" : ""
                } swap btn-ghost swap-rotate btn-circle btn justify-self-end border-transparent lg:hidden`}
                onClick={() => setMenuVisible(!menuVisible)}
            >
                <svg
                    className="swap-off fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512"
                >
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>
                <svg
                    className="swap-on fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512"
                >
                    <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
            </button>

            {matchMedia && (
                <button
                    type="button"
                    onClick={() => {
                        // toggleCart(true)
                        navigate("/cart");
                    }}
                    className="btn-ghost btn-circle btn justify-self-end"
                >
                    <div className="indicator">
                        <AiOutlineShoppingCart size="24px" color="white" />
                        <span className="badge badge-sm indicator-item border-transparent bg-secondary">
                            {totalUnits}
                        </span>
                    </div>
                </button>
            )}
            {matchMedia && <Avatar />}

            <AnimatePresence>
                {menuVisible && (
                    <MobileNavMenu
                        visible={menuVisible}
                        onLinkClick={() => setMenuVisible(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
