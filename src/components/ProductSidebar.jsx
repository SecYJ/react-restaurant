import { useEffect, useState } from "react";
import { useProductsCtx } from "../contexts/ProductsCtx";
import useDebounce from "../hooks/useDebounce";
import Search from "../components/Search";
import MenuSelect from "../components/MenuSelect";

const ProductSidebar = () => {
    const { dispatch, filtered_products } = useProductsCtx();
    const [search, setSearch] = useState("");
    const debounceSearch = useDebounce(search, 750);

    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS", payload: debounceSearch });
        dispatch({ type: "SET_SEARCH", payload: debounceSearch });
    }, [debounceSearch]);

    return (
        <>
            <Search onSearchChange={setSearch} search={search} />
            {debounceSearch !== "" && (
                <p>搜寻到 {filtered_products.length} 个菜色</p>
            )}
            {debounceSearch === "" && <MenuSelect />}
        </>
    );
};

export default ProductSidebar;
