import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { menu } from "../constants/headerNavList";
import { useCartCtx } from "../contexts/CartCtx";
import Avatar from "./Avatar";
import MobileNavMenu from "./MobileNavMenu";
import useMediaQuery from "../hooks/useMediaQuery";

const Navbar = () => {
    const { toggleCart, totalUnits } = useCartCtx();
    const [menuVisible, setMenuVisible] = useState(false);
    const matchMedia = useMediaQuery("(min-width:1024px)");

    return (
        <>
            <div className="mr-3 hidden items-center gap-3 justify-self-end lg:flex">
                {menu.map((m) => (
                    <NavLink
                        className="btn-ghost btn-circle btn font-normal"
                        to={m.link}
                        key={m.text}
                    >
                        {m.text}
                    </NavLink>
                ))}
            </div>

            <button
                className="btn-ghost btn-square btn justify-self-end lg:hidden"
                onClick={() => setMenuVisible(!menuVisible)}
            >
                <AiOutlineMenu size="24px" />
            </button>

            {matchMedia && (
                <button
                    type="button"
                    onClick={() => toggleCart(true)}
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
