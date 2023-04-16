import { motion } from "framer-motion";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCartCtx } from "../../contexts/CartCtx";

const FoodCartButton = () => {
    const { dispatch, totalUnits } = useCartCtx();
    return (
        <button
            animate={{
                rotate: 360,
            }}
            transition={{
                duration: 10,
            }}
            className="fixed bottom-12 right-12 z-50 flex items-center gap-3 rounded-full p-4"
            onClick={() =>
                dispatch({ type: "TOGGLE_CART_VISIBILITY", payload: true })
            }
        >
            <div className="absolute right-6 bottom-6 rounded-full bg-secondary text-sm text-white">
                {totalUnits}
            </div>
            <div className="rounded-full bg-primary p-2">
                <AiOutlineShoppingCart size="2rem" color="white" />
            </div>
        </button>
    );
};

export default FoodCartButton;
