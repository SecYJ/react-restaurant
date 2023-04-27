import {
    About,
    Checkout,
    Home,
    Layout,
    Menu,
    NotFound,
    News,
    NewsPost,
    PrivateRoute,
} from "./pages/index.js";

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
                path: "news",
                children: [
                    {
                        index: true,
                        element: <News />,
                    },
                    {
                        path: ":post",
                        element: <NewsPost />,
                    },
                ],
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
