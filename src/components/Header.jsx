import { NavLink } from "react-router-dom";

const menu = [
    {
        link: "/",
        text: "首页",
    },
    {
        link: "/about",
        text: "关于",
    },
    {
        link: "/menu",
        text: "菜单",
    },
    {
        link: "/appointment",
        text: "预约",
    },
    {
        link: "/login",
        text: "登入",
    },
];

const Header = () => {
    return (
        <div className="sticky top-0 left-0 z-[2] bg-primary text-white">
            <div className="container navbar min-h-[5rem] justify-between py-4">
                <h1>一马风味</h1>
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
                </ul>
            </div>
        </div>
    );
};
export default Header;
