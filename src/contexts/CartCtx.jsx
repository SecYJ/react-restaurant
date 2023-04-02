import { createContext, useContext, useReducer } from "react";
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

    return (
        <CartCtx.Provider value={{ ...state, dispatch }}>
            {children}
        </CartCtx.Provider>
    );
};

export const useCartCtx = () => useContext(CartCtx);

export default CartCtxProvider;
