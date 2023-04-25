import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Navbar from "./Navbar.jsx";

const Header = () => {
    return (
        <header className="navbar sticky top-0 left-0 z-[2] bg-primary text-white">
            <div className="container grid grid-cols-[auto_1fr_auto_auto]">
                <Link to="/" className="flex items-center gap-2">
                    <img src={logo} className="h-9 w-9 object-cover" />
                    <p className="mr-4">满味芳</p>
                </Link>
                <Navbar />
            </div>
        </header>
    );
};
export default Header;
