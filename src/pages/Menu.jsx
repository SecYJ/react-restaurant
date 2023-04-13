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
                        <h1 className="mb-8 text-3xl">菜单列表</h1>
                        <MenuGrid />
                    </div>
                </MenuCtxProvider>
            </div>
        </motion.main>
    );
};
export default Menu;

// if (isLoading) {
//     return (

//     );
// }

// TODO: fall back that provide to productList if search result is 0 | empty
//

/*
1. Hide the navigation once the input.length !== 0
- requirements : based on the input's length to determine

2. Shows the search result length
- requirements: filter data using filter method

COMPONENT TREES

ProductSidebar -> Search && Navigation

if using useState as local state to control input
1. When user click on navigation, dispatch an update to ProductsContext update the product list
2. Search input's length !== 0 then hide the ProductsList component

*/
