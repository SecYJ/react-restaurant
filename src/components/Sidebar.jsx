const Sidebar = () => {
    return (
        <ul className="menu rounded-box w-56 bg-base-100">
            <li>
                <a>Item 1</a>
            </li>
            <li className="bordered">
                <a>I have border</a>
            </li>
            <li>
                <a>Item 3</a>
            </li>
        </ul>
    );
};

export default Sidebar;
