import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";

export const AuthCtx = ({ children }) => {
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

    if (!(domain && clientId)) {
        return null;
    }

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                redirect_uri: window.location.origin,
            }}
            cacheLocation="localstorage"
        >
            {children}
        </Auth0Provider>
    );
};

export default AuthCtx;
