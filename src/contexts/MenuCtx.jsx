import { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/menuReducer.js";

const MenuCtx = createContext();

const initialStates = {
    menu: [],
    filtered_menu: [],
    currentSelect: "全部",
    search: "",
};

const MenuCtxProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialStates);

    return (
        <MenuCtx.Provider value={{ ...state, dispatch }}>
            {children}
        </MenuCtx.Provider>
    );
};

export const useMenuCtx = () => useContext(MenuCtx);

export default MenuCtxProvider;
