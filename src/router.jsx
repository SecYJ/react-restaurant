import { createBrowserRouter } from "react-router-dom";
import {
    About,
    Checkout,
    Home,
    Layout,
    Menu,
    NotFound,
} from "./pages/index.js";
import PrivateRoute from "./pages/PrivateRoute.jsx";

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "menu",
                element: <Menu />,
            },
            {
                path: "checkout",
                element: (
                    <PrivateRoute>
                        <Checkout />
                    </PrivateRoute>
                ),
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
];

const router = createBrowserRouter(routes);

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

export default router;
