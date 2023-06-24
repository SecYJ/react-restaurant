import { lazy, Suspense } from "react";
import Loading from "./components/Loading.jsx";

const Layout = lazy(() => import("./pages/Layout"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Menu = lazy(() => import("./pages/Menu"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivateRoute = lazy(() => import("./pages/PrivateRoute"));
const Cart = lazy(() => import("./pages/Cart"));

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<Loading />}>
                        <Home />
                    </Suspense>
                ),
            },
            {
                path: "about",
                element: (
                    <Suspense fallback={<Loading />}>
                        <About />
                    </Suspense>
                ),
            },
            {
                path: "menu",
                element: (
                    <Suspense fallback={<Loading />}>
                        <Menu />
                    </Suspense>
                ),
            },
            {
                path: "checkout",
                element: (
                    <Suspense fallback={<Loading />}>
                        <PrivateRoute>
                            <Checkout />
                        </PrivateRoute>
                    </Suspense>
                ),
            },
            {
                path: "cart",
                element: (
                    <Suspense fallback={<Loading />}>
                        <Cart />
                    </Suspense>
                ),
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
];

export default routes;

export const animateConfigs = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
    transition: {
        duration: 0.4,
    },
};
