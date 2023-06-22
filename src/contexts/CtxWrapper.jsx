import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AuthCtx from "./AuthCtx";
import CartCtxProvider from "./CartCtx";
import MenuCtxProvider from "./MenuCtx";

const CtxWrapper = ({ children }) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            },
        },
    });

    return (
        <AuthCtx>
            <QueryClientProvider client={queryClient}>
                <CartCtxProvider>
                    <MenuCtxProvider>
                        {children}
                    </MenuCtxProvider>
                </CartCtxProvider>
                <ReactQueryDevtools />
            </QueryClientProvider>
        </AuthCtx>
    );
};

export default CtxWrapper;
