import { useEffect, useState } from "react";
import { useMenuCtx } from "../../contexts/MenuCtx";
import useDebounce from "../../hooks/useDebounce";
import Search from "../Search";
import MenuSelect from "./MenuSelect";

const MenuSidebar = () => {
    const { dispatch, filtered_menu } = useMenuCtx();
    const [search, setSearch] = useState("");
    const debounceSearch = useDebounce(search, 750);

    useEffect(() => {
        dispatch({ type: "SEARCH_PRODUCTS", payload: debounceSearch });
        dispatch({ type: "SET_SEARCH", payload: debounceSearch });
    }, [debounceSearch]);

    return (
        <>
            <Search onSearchChange={setSearch} search={search} />
            {debounceSearch !== "" && (
                <p>搜寻到 {filtered_menu.length} 个菜色</p>
            )}
            {debounceSearch === "" && <MenuSelect />}
        </>
    );
};

export default MenuSidebar;
