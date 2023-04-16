import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import { menu } from "../constants/headerNavList.js";
import logo from "../assets/dimsum.png";

const Header = () => {
    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
        useAuth0();
    const t = useAuth0();
    // const activeLink =

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
                            <li className="" key={m.text}>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? "border-b-2 border-white pb-2"
                                            : "pb-2"
                                    }
                                    to={m.link}
                                >
                                    {m.text}
                                </NavLink>
                            </li>
                        ))}
                        <li>
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
