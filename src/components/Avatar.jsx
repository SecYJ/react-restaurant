import { useAuth0 } from "@auth0/auth0-react";

const Avatar = () => {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    return (
        <div className="dropdown-end dropdown">
            {isAuthenticated ? (
                <>
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
                </>
            ) : (
                <button
                    type="button"
                    className="btn-ghost btn-circle btn font-normal"
                    onClick={async () => {
                        await loginWithRedirect({
                            appState: {
                                returnTo: window.location.pathname,
                            },
                        });
                    }}
                >
                    登入
                </button>
            )}
        </div>
    );
};

export default Avatar;
