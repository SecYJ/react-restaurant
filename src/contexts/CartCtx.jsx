import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useReducer,
} from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import reducer from "../reducers/CartReducer";

const CartCtx = createContext();

const initialStates = {
    cart: [],
    totalAmount: 0,
    totalUnits: 0,
};

const CartCtxProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialStates);
    const [cart, setCart] = useLocalStorage("cart", []);

    useEffect(() => {
        setCart(state.cart, []);
    }, [state.cart, state.totalAmount, state.totalUnits]);

    useEffect(() => {
        dispatch({ type: "SET_CART", payload: cart });
    }, []);

    const updateCartItem = useCallback(({ direction, id }) => {
        dispatch({
            type: "UPDATE_CART_ITEM",
            payload: { direction, id },
        });
    }, []);

    const deleteCartItem = useCallback((id) => {
        dispatch({ type: "REMOVE_CART_ITEM", payload: id });
    }, []);

    const toggleCart = useCallback((visibility) => {
        dispatch({ type: "TOGGLE_CART_VISIBILITY", payload: visibility });
    }, []);

    const clearCart = useCallback(() => {
        dispatch({ type: "CLEAR_CART" });
    }, []);

    return (
        <CartCtx.Provider
            value={{
                ...state,
                dispatch,
                updateCartItem,
                deleteCartItem,
                toggleCart,
                clearCart,
            }}
        >
            {children}
        </CartCtx.Provider>
    );
};

export const useCartCtx = () => useContext(CartCtx);

export default CartCtxProvider;
