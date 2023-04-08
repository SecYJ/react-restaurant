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
            if (option === "input") {
                result = inputAmountValidation(e.target.value);
            }
            dispatch({
                type: "TOGGLE_CART_ITEM_AMOUNT",
                payload: { option, id, inputValue: result },
            });
        },
        []
    );

    const tItemAmount = (item) => {
        // NOTE: dispatch here to update the state inside reducer
        // const regexPattern = /\D/g;
        // const containsString =
        // const { stock, amount, id } = item;
        // let temp = null;

        // if (amount > stock) {
        //     temp = amount;
        // }

        const { id, inputValue } = item;

        dispatch({
            type: "TOGGLE_CART_ITEM_AMOUNT",
            payload: {
                id,
                inputValue,
                // option: "inc",
            },
        });
    };

    return (
        <CartCtx.Provider
            value={{
                ...state,
                dispatch,
                toggleItemAmount,
                tItemAmount,
            }}
        >
            {children}
        </CartCtx.Provider>
    );
};

export const useCartCtx = () => useContext(CartCtx);

export default CartCtxProvider;

/*
1. Click on + or -, toggle one
2. When user type out:
- 1. Check if the input numbers contain string
- 2. Check if the input contains numbers
- 3. Verify whether the input's value is greater or lower
     than stock
*/
