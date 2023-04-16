import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";
import "./index.css";
import CartCtxProvider from "./contexts/CartCtx";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Auth0Provider
            // domain="http://localhost:5173"
            domain="dev-vgu1f13o.us.auth0.com"
            clientId="jPFmkUWMLWy96VcLQVVzpzlm053MqXTb"
            authorizationParams={{
                redirect_uri: window.location.origin,
            }}
        >
            <QueryClientProvider client={queryClient}>
                <CartCtxProvider>
                    <App />
                </CartCtxProvider>
                <ReactQueryDevtools />
            </QueryClientProvider>
        </Auth0Provider>
    </React.StrictMode>
);
