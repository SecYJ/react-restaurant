import { useId } from "react";
import { useMenuCtx } from "../contexts/MenuCtx";
import { BsSearch } from "react-icons/bs";
import Skeleton from "./skeleton/Skeleton";
import useFoodMenu from "../hooks/useFoodMenu";

const Search = ({ search, onSearchChange }) => {
    // const { menu } = useMenuCtx();
    const id = useId();
    const { isLoading } = useFoodMenu();

    if (isLoading) {
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
