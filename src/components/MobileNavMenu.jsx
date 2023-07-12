import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { menu } from "../constants/headerNavList";
import useMediaQuery from "../hooks/useMediaQuery";

const MobileNavMenu = ({ toggleVisibility }) => {
    const menuRef = useRef();
    const [height, setHeight] = useState(0);
    const navigate = useNavigate();
    const matchMedia = useMediaQuery("(min-width: 1024px)");

    useEffect(() => {
        setHeight(menuRef.current.scrollHeight);

        return () => setHeight(0);
    }, []);

    const onNavigate = (page) => {
        navigate(page);
        toggleVisibility();
    };

    return (
        <motion.nav
            className="absolute top-full left-0 flex w-full flex-col overflow-hidden bg-primary lg:hidden"
            initial={{ height: 0 }}
            animate={{
                height: matchMedia ? 0 : height,
            }}
            exit={{ height: 0 }}
            ref={menuRef}
        >
            {menu.map((m) => (
                <NavLink
                    className="block rounded py-2 pl-3 text-center hover:bg-gray-100 hover:text-black/70"
                    to={m.link}
                    key={m.text}
                    onClick={() => onNavigate(m.link)}
                >
                    {m.text}
                </NavLink>
            ))}
        </motion.nav>
    );
};

export default MobileNavMenu;
