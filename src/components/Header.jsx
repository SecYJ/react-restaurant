import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import { menu } from "../constants/headerNavList.js";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCartCtx } from "../contexts/CartCtx.jsx";
import logo from "../assets/dimsum.png";

const Header = () => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    const { toggleCart, totalUnits } = useCartCtx();

    return (
        <div className="sticky top-0 left-0 z-[2] bg-primary text-white">
            <div className="container navbar min-h-[5rem] justify-between py-4">
                <div>
                    <h1 className="mr-4">满味芳</h1>
                    <img src={logo} className="h-9 w-9 object-cover" />
                </div>
                <div>
                    <ul className="flex gap-8 ">
                        {menu.map((m) => (
                            <li
                                className="grid place-items-center"
                                key={m.text}
                            >
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "p-2" : "p-2"
                                    }
                                    to={m.link}
                                >
                                    {m.text}
                                </NavLink>
                            </li>
                        ))}
                        <li className="relative">
                            <button
                                className="rounded-full p-2 hover:bg-white/30 "
                                onClick={() => toggleCart(true)}
                            >
                                <div className="absolute -right-2.5 top-0 grid h-6 w-6 place-items-center rounded-full bg-secondary text-sm text-white">
                                    {totalUnits}
                                </div>
                                <AiOutlineShoppingCart
                                    size="1.5rem"
                                    color="white"
                                />
                            </button>
                        </li>
                        <li className="grid place-items-center p-2">
                            {isAuthenticated && user ? (
                                <button
                                    type="button"
                                    onClick={() =>
                                        logout({
                                            logoutParams: {
                                                returnTo:
                                                    window.location.origin,
                                            },
                                        })
                                    }
                                >
                                    登出
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => loginWithRedirect()}
                                >
                                    登入
                                </button>
                            )}
                        </li>
                    </ul>
                    {isAuthenticated && (
                        <img
                            className="ml-8 h-8 w-8 rounded-full"
                            title={user.name}
                            src={user.picture}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};
export default Header;
