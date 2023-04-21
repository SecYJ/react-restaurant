import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AuthCtx from "./AuthCtx";
import CartCtxProvider from "./CartCtx";

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
                <CartCtxProvider>{children}</CartCtxProvider>
                <ReactQueryDevtools />
            </QueryClientProvider>
        </AuthCtx>
    );
};

export default CtxWrapper;
