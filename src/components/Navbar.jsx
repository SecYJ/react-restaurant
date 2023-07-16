import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCartCtx } from "../contexts/CartCtx";
import { menu } from "../constants/nav-links";
import Avatar from "./Avatar";

const Navbar = () => {
    const navigate = useNavigate();
    const { totalUnits } = useCartCtx();
    const [_, setMenuVisible] = useState(false);

    return (
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
            <button
                type="button"
                onClick={() => navigate("/cart")}
                className="btn-ghost btn-circle btn justify-self-end"
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
    );
};

export default Navbar;
