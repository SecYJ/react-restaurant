import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCartCtx } from "../../contexts/CartCtx";

const FoodCartButton = () => {
    const { dispatch } = useCartCtx();
    return (
        <button
            className="fixed bottom-12 right-12 z-50 flex items-center gap-3 rounded-full border border-gray-300 bg-gray-300 p-2"
            onClick={() =>
                dispatch({ type: "TOGGLE_CART_VISIBILITY", payload: true })
            }
        >
            <div className="rounded-full bg-primary p-2">
                <AiOutlineShoppingCart color="white" />
            </div>
            <p className="text-base">RM34.90</p>
            <span className="absolute top-0 right-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary p-1 text-base text-white">
                6
            </span>
        </button>
    );
};

export default FoodCartButton;
