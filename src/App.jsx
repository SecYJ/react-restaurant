import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./router";
import Loading from "./components/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter(routes);

const App = () => {
    return (
        <Suspense fallback={<Loading />}>
            <RouterProvider router={router} />
            <ToastContainer
                draggable={false}
                closeOnClick={true}
                className="custom"
                autoClose={3000}
                pauseOnFocusLoss={false}
            />
        </Suspense>
    );
};
export default App;
