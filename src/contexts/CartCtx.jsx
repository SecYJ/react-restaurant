import { createContext, useCallback, useContext, useReducer } from "react";
import reducer from "../reducers/CartReducer";

const CartCtx = createContext();

const initialStates = {
    cart: [],
    cartVisible: false,
    totalAmount: 0,
    totalUnits: 0,
};

const CartCtxProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialStates);

    const updateCartItem = useCallback(({ direction, value, id }) => {
        dispatch({
            type: "UPDATE_CART_ITEM",
            payload: { direction, value, id },
        });
    }, []);

    const deleteCartItem = useCallback((id) => {
        dispatch({ type: "REMOVE_CART_ITEM", payload: id });
    }, []);

    const toggleCart = useCallback((visibility) => {
        dispatch({ type: "TOGGLE_CART_VISIBILITY", payload: visibility });
    }, []);

    return (
        <CartCtx.Provider
            value={{
                ...state,
                dispatch,
                updateCartItem,
                deleteCartItem,
                toggleCart,
            }}
        >
            {children}
        </CartCtx.Provider>
    );
};

export const useCartCtx = () => useContext(CartCtx);

export default CartCtxProvider;
