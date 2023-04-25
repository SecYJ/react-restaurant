import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { menu } from "../constants/headerNavList";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCartCtx } from "../contexts/CartCtx";
import Avatar from "./Avatar";

const MobileNavMenu = ({ visible, onLinkClick }) => {
    const menuRef = useRef();
    const { totalUnits, toggleCart } = useCartCtx();
    const [height, setHeight] = useState(0);

    useEffect(() => {
        visible ? setHeight(menuRef.current.scrollHeight) : setHeight(0);
    }, [visible]);

    return (
        <motion.div
            className="col-span-4 overflow-hidden lg:hidden"
            initial={{
                height: 0,
            }}
            animate={{
                height,
            }}
            exit={{
                height: 0,
            }}
            ref={menuRef}
        >
            {menu.map((m) => (
                <NavLink
                    className="block rounded py-2 pl-3 text-center hover:bg-gray-100 hover:text-black/70"
                    to={m.link}
                    key={m.text}
                    onClick={onLinkClick}
                >
                    {m.text}
                </NavLink>
            ))}
            <div className="flex justify-center">
                <button
                    type="button"
                    onClick={() => toggleCart(true)}
                    className="btn-ghost btn-circle btn"
                >
                    <div className="indicator">
                        <AiOutlineShoppingCart size="24px" color="white" />
                        <span className="badge badge-sm indicator-item border-transparent bg-secondary">
                            {totalUnits}
                        </span>
                    </div>
                </button>
                <Avatar />
            </div>
        </motion.div>
    );
};

export default MobileNavMenu;
