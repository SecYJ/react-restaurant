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
            <MenuCtxProvider>
                <div className="flex gap-8">
                    <div className="sticky left-0 top-[160px] h-full w-1/4">
                        <MenuSidebar />j
                    </div>
                    <div className="w-3/4">
                        <h1 className="mb-8 text-5xl">菜单列表</h1>
                        <MenuGrid />
                    </div>
                </div>
            </MenuCtxProvider>
        </motion.main>
    );
};
export default Menu;

/* 
items to be save into db
cart: [
    {
        id: 1,
        totalAmount: 134.37,
        totalUnit: 50,
        itemsInCart: [
            A bunch of objects here,
            {
                name: "roll",
                price: 2.5,
                unit: 5,
                imgUrl,
                id: 100,
                stock: 20
                category: "xxx"
            }
        ]
    }
]

cart submit => use uuid to generate unique id and save it in orders array

orders: [

]


we need provide id to match the cart id with db

*/
