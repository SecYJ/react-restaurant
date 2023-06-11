import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const AuthCtx = ({ children }) => {
    const navigate = useNavigate();

    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    // const redirectUri = import.meta.env.VITE_AUTH0_REDIRECT_URI;

    const onRedirectCallback = (appState) => {
        // navigate(appState?.returnTo || window.location.pathname);
        // navigate(appState?.returnTo || window.location.origin);
    };

    if (!(domain && clientId)) {
        return null;
    }
    // if (!(domain && clientId && redirectUri)) {
    //     return null;
    // }

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            // onRedirectCallback={onRedirectCallback}
            // authorizationParams={{
            //     redirect_uri: window.location.origin,
            // }}
            cacheLocation="localstorage"
            redirectUri={window.location.origin}
        >
            {children}
        </Auth0Provider>
    );
};

export default AuthCtx;
