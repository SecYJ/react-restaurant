import { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/ProductsReducer.js";

const ProductsCtx = createContext();

const initialStates = {
    products: [],
    filtered_products: [],
    currentSelect: "全部",
    search: "",
};

const ProductsCtxProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialStates);

    return (
        <ProductsCtx.Provider value={{ ...state, dispatch }}>
            {children}
        </ProductsCtx.Provider>
    );
};

export const useProductsCtx = () => useContext(ProductsCtx);

export default ProductsCtxProvider;
