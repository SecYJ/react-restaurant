import { useAuth0 } from "@auth0/auth0-react";
import useMediaQuery from "../hooks/useMediaQuery";

const Avatar = () => {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    const matchMedia = useMediaQuery("(min-width:1024px)");

    if (isAuthenticated) {
        return (
            <div
                className={`${
                    matchMedia ? "dropdown-end" : "dropdown-top"
                } dropdown`}
            >
                <button
                    type="button"
                    className="btn-ghost btn-circle avatar btn"
                >
                    <div className="w-8 rounded-full">
                        <img src={user.picture} />
                    </div>
                </button>
                <ul className="dropdown-content menu menu-compact mt-3 rounded-lg bg-gray-200 text-black/70 shadow">
                    <li>
                        <a className="justify-between hover:bg-primary hover:text-white">
                            Profile
                        </a>
                    </li>
                    <li>
                        <a className="hover:bg-primary hover:text-white">
                            Settings
                        </a>
                    </li>
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
    }

    return (
        <button
            type="button"
            className="btn-ghost btn-circle btn font-normal"
            // onClick={async () => {
            //     await loginWithRedirect({
            //         appState: {
            //             returnTo: window.location.pathname,
            //         },
            //     });
            // }}
            onClick={() => {
                loginWithRedirect();
            }}
        >
            登入
        </button>
    );
};

export default Avatar;
