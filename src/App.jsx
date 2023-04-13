import { RouterProvider } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import router from "./router";

const App = () => {
    return (
        <>
            <AnimatePresence>
                <RouterProvider router={router} />
            </AnimatePresence>
        </>
    );
};
export default App;
