import { useId, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useMenuCtx } from "../contexts/MenuCtx";

const Search = ({ search, onSearchChange }) => {
    const id = useId();
    const { filtered_menu } = useMenuCtx();
    const searchRef = useRef(null);

    const onSearchClear = () => {
        onSearchChange("");
        searchRef.current.focus();
    };

    return (
        <form className="relative mb-4 rounded-md">
            <input
                type="text"
                className="mx-auto w-full rounded-md border border-gray-300 p-3 text-base outline-none focus:border-primary"
                placeholder="搜寻"
                disabled={filtered_menu.length < 1}
                id={id}
                onChange={(e) => {
                    onSearchChange(e.target.value);
                }}
                value={search}
                ref={searchRef}
            />
            <label
                htmlFor={id}
                className="absolute top-1/2 right-2 -translate-y-1/2 "
            >
                {search ? (
                    <button type="button" onClick={onSearchClear}>
                        <AiOutlineClose />
                    </button>
                ) : (
                    <BsSearch />
                )}
            </label>
        </form>
    );
};
export default Search;
