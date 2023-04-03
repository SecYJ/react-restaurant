import { createBrowserRouter } from "react-router-dom";
import {
    About,
    Appointment,
    Checkout,
    DeliveryInfo,
    Home,
    Layout,
    Menu,
    NotFound,
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
                path: "appointment",
                element: <Appointment />,
            },
            {
                path: "checkout",
                element: <Checkout />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
];

const router = createBrowserRouter(routes);

export default router;
