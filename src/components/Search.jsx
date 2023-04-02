import { useId } from "react";
import { useProductsCtx } from "../contexts/ProductsCtx";
import { BsSearch } from "react-icons/bs";
import Skeleton from "./skeleton/Skeleton";

const Search = ({ search, onSearchChange }) => {
    const { products } = useProductsCtx();
    const id = useId();

    if (products.length === 0) {
        return <Skeleton classes="h-12 mb-4" />;
    }

    return (
        <form className="relative mb-4 rounded-md">
            <input
                type="text"
                className="mx-auto w-full rounded-md border border-gray-300 p-3 text-base outline-none focus:border-primary"
                placeholder="搜寻"
                onChange={(e) => {
                    onSearchChange(e.target.value);
                }}
                value={search}
                id={id}
            />
            <label
                htmlFor={id}
                className="absolute top-1/2 right-2 -translate-y-1/2 "
            >
                <BsSearch />
            </label>
        </form>
    );
};
export default Search;
