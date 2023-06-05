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
            className="container my-10 lg:my-20"
        >
            <MenuCtxProvider>
                <div className="flex flex-col gap-8 lg:flex-row">
                    <div className="sticky left-0 top-[104px] bg-white lg:top-[160px] lg:h-full lg:w-1/4">
                        <MenuSidebar />
                    </div>
                    <div className="lg:w-3/4">
                        <h1 className="mb-3 text-2xl lg:mb-6 lg:text-4xl">
                            菜单列表
                        </h1>
                        <MenuGrid />
                    </div>
                </div>
            </MenuCtxProvider>
        </motion.main>
    );
};
export default Menu;
