import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const CartButton = ({ variant, onClick, disabled = false }) => {
    if (variant === "add") {
        return (
            <button
                type="button"
                className="rounded-full p-2 text-white enabled:bg-primary/80 disabled:cursor-not-allowed disabled:bg-primary/60"
                disabled={disabled}
                onClick={onClick}
            >
                <AiOutlinePlus />
            </button>
        );
    }

    return (
        <button
            type="button"
            className="rounded-full border p-2 enabled:border-gray-700 disabled:cursor-not-allowed disabled:border-gray-400"
            disabled={disabled}
            onClick={onClick}
        >
            <AiOutlineMinus
                className={`${disabled === 1 ? "text-gray-400" : ""}`}
            />
        </button>
    );
};

export default CartButton;
