import { useCartCtx } from "../../contexts/CartCtx";
import { AiOutlineClose } from "react-icons/ai";

const CartHeader = () => {
    // const { dispatch } = useCartCtx();

    return (
        <div className="flex items-start justify-between">
            <h2
                className="text-lg font-medium text-gray-900"
                id="slide-over-title"
            >
                购物车列表
            </h2>
            <div className="ml-3 flex h-7 items-center">
                <button
                    type="button"
                    className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                    // onClick={() => dispatch({ type: "TOGGLE_CART_VISIBILITY" })}
                    onClick={() => dispatch(toggleVisibility(false))}
                >
                    <AiOutlineClose />
                </button>
            </div>
        </div>
    );
};

export default CartHeader;
