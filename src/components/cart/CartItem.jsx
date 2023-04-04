import { useId } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useCartCtx } from "../../contexts/CartCtx";

const CartItem = ({
    imgFallback,
    name,
    price,
    orderQty: initialAmount,
    id,
    stock,
}) => {
    const amount = initialAmount;
    const { dispatch } = useCartCtx();
    const inputId = useId();
    const [cName, ...eName] = name.split(" ");
    const englishName = eName.join(" ");
    const totalPrice = (amount * price).toFixed(2);
    // TODO: error msg for exceeded stock

    const inputAmountValidation = (val) => {
        let finalValue = 0;
        const invalidNum = /\D/g.test(val);
        if (invalidNum) return (finalValue = val.replace(/\D/g, ""));
        if (val > stock) return (finalValue = stock);
        return Number(val) === 0 ? "" : Number(val);
    };

    const toggleCartItemAmount = ({ option, id, event: e }) => {
        let result = null;
        if (option === "input") result = inputAmountValidation(e.target.value);
        dispatch({
            type: "TOGGLE_CART_ITEM_AMOUNT",
            payload: { option, id, inputValue: result },
        });
    };

    return (
        <li className="flex py-6" key={id}>
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                    src={imgFallback}
                    alt={name}
                    className="h-full w-full object-cover object-center"
                />
            </div>
            <div className="ml-4 flex grow flex-col justify-between">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>{cName}</h3>
                        <p className="ml-4">{totalPrice}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{englishName}</p>
                </div>
                <div className="grid grid-cols-[1fr_auto] items-center text-sm">
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            className="rounded-full border p-2 enabled:border-gray-700 disabled:cursor-not-allowed disabled:border-gray-400"
                            disabled={amount === 1}
                            onClick={() =>
                                toggleCartItemAmount({ option: "dec", id })
                            }
                        >
                            <AiOutlineMinus
                                className={`${
                                    amount === 1 ? "text-gray-400" : ""
                                }`}
                            />
                        </button>
                        <p className="flex min-w-[45px] text-gray-500">
                            <label htmlFor={inputId}>Qty</label>
                            <input
                                type="text"
                                id={inputId}
                                value={amount}
                                onBlur={() => {
                                    if (amount === "") {
                                        dispatch({
                                            type: "TOGGLE_CART_ITEM_AMOUNT",
                                            payload: {
                                                option: "blue",
                                                inputValue: 1,
                                                id,
                                            },
                                        });
                                    }
                                }}
                                onChange={(event) =>
                                    toggleCartItemAmount({
                                        option: "input",
                                        event,
                                        id,
                                    })
                                }
                                className="ml-2 w-[50px] border border-gray-300 text-center outline-none focus:border-primary"
                            />
                        </p>
                        <button
                            type="button"
                            className="rounded-full p-2 text-white enabled:bg-primary/80 disabled:cursor-not-allowed disabled:bg-primary/60"
                            disabled={amount >= stock}
                            onClick={() =>
                                toggleCartItemAmount({ option: "inc", id })
                            }
                        >
                            <AiOutlinePlus />
                        </button>
                    </div>
                    <div className="flex">
                        <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() =>
                                dispatch({
                                    type: "REMOVE_CART_ITEM",
                                    payload: id,
                                })
                            }
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
