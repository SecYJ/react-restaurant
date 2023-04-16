import { useCartCtx } from "../../contexts/CartCtx";
import { AnimatePresence, motion } from "framer-motion";
import Overlay from "../Overlay";
import CartItem from "./CartItem";
import CartFooter from "./CartFooter";
import CartHeader from "./CartHeader";

const variant = {
    animate: {
        transition: {
            staggerChildren: 0.1,
            delay: 0.3,
        },
    },
    exit: {
        opacity: 0,
    },
};

const Cart = () => {
    const { cart, dispatch } = useCartCtx();

    return (
        <Overlay
            onClose={() =>
                dispatch({ type: "TOGGLE_CART_VISIBILITY", payload: false })
            }
        >
            <motion.div
                key="modal"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.25 }}
                className=" fixed inset-y-0 right-0 flex max-w-full pl-10"
            >
                <div className="w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                        <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                            <CartHeader />
                            <div className="mt-8">
                                {cart.length > 0 ? (
                                    <motion.ul
                                        variants={variant}
                                        {...variant}
                                        className="-my-6 divide-y divide-gray-200"
                                    >
                                        <AnimatePresence>
                                            {cart.map((c, index) => (
                                                <CartItem
                                                    key={c.id}
                                                    {...c}
                                                    index={index + 1}
                                                />
                                            ))}
                                        </AnimatePresence>
                                    </motion.ul>
                                ) : (
                                    <p>目前购物为空</p>
                                )}
                            </div>
                        </div>
                        {cart.length > 0 && <CartFooter />}
                    </div>
                </div>
            </motion.div>
        </Overlay>
    );
};

export default Cart;
/*
const [step, setStep] = useState(1)
1. A step variable to control step

Page 1 of form
- Data of 

*/
