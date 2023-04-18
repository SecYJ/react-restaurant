import { motion } from "framer-motion";
import MenuCtxProvider from "../contexts/MenuCtx";
import MenuGrid from "../components/foodMenu/MenuGrid";
import MenuSidebar from "../components/foodMenu/MenuSidebar";
import { animateConfigs } from "../router";

const Menu = () => {
    return (
        <motion.main
            variants={animateConfigs}
            {...animateConfigs}
            className="container my-20"
        >
            <div className="flex gap-8">
                <MenuCtxProvider>
                    <div className="sticky left-0 top-[160px] h-full w-1/4">
                        <MenuSidebar />
                    </div>
                    <div className="w-3/4">
                        <h1 className="mb-8 text-5xl">菜单列表</h1>
                        <MenuGrid />
                    </div>
                </MenuCtxProvider>
            </div>
        </motion.main>
    );
};
export default Menu;
