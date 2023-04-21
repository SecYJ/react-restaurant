import { useAuth0 } from "@auth0/auth0-react";

const AvatarDropdown = ({ avatar }) => {
    const { logout } = useAuth0();
    const { name, picture } = avatar;

    return (
        <div
            className="dropdown dropdown-end grid place-items-center"
            tabIndex={0}
        >
            <img
                className="ml-8 h-8 w-8 rounded-full"
                title={name}
                src={picture}
            />
            <ul
                className="dropdown-content dropdown-open menu rounded-box top-full w-52 translate-y-2 bg-gray-200 p-2 shadow"
                tabIndex={0}
            >
                <li>
                    <button
                        className="text-black/70 hover:bg-primary hover:text-white"
                        onClick={() =>
                            logout({
                                logoutParams: {
                                    returnTo: window.location.origin,
                                },
                            })
                        }
                    >
                        登出
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default AvatarDropdown;
