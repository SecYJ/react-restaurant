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

    const inputAmountValidation = useCallback((val, stock) => {
        let finalValue = 0;
        const invalidNum = /\D/g.test(val);
        if (invalidNum) return (finalValue = val.replace(/\D/g, ""));
        if (val > stock) return (finalValue = stock);
        return Number(val) === 0 ? "" : Number(val);
    }, []);

    const toggleItemAmount = useCallback(
        ({ option, id, stock = 0, event: e }) => {
            let result = null;
            if (option === "input")
                result = inputAmountValidation(e.target.value);
            return () =>
                dispatch({
                    type: "TOGGLE_CART_ITEM_AMOUNT",
                    payload: { option, id, inputValue: result },
                });
        },
        []
    );

    return (
        <CartCtx.Provider value={{ ...state, dispatch, toggleItemAmount }}>
            {children}
        </CartCtx.Provider>
    );
};

export const useCartCtx = () => useContext(CartCtx);

export default CartCtxProvider;
