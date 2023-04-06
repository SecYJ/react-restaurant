import { useId } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useCartCtx } from "../../contexts/CartCtx";
import CartButton from "./CartButton";

const CartItem = ({
    imgFallback,
    name,
    price,
    orderQty: amount,
    id,
    stock,
}) => {
    const { dispatch, toggleItemAmount } = useCartCtx();
    const inputId = useId();
    const [cName, ...eName] = name.split(" ");
    const englishName = eName.join(" ");
    const totalPrice = (amount * price).toFixed(2);
    // TODO: error msg for exceeded stock

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
                        <CartButton
                            variant="minus"
                            onClick={toggleItemAmount({
                                option: "dec",
                                id,
                                stock,
                            })}
                            disabled={amount === 1}
                        />
                        <p className="flex min-w-[45px] text-gray-500">
                            <label htmlFor={inputId}>Qty</label>
                            {/* TODO: fix input bugs */}
                            {/* <input
                                type="text"
                                id={inputId}
                                value={amount}
                                onBlur={() => {
                                    if (amount === "") {
                                        dispatch({
                                            type: "TOGGLE_CART_ITEM_AMOUNT",
                                            payload: {
                                                // option: "blur",
                                                inputValue: 1,
                                                id,
                                            },
                                        });
                                    }
                                }}
                                onChange={(event) =>
                                    toggleItemAmount({
                                        option: "input",
                                        event,
                                        id,
                                        stock,
                                    })
                                }
                                className="ml-2 w-[50px] border border-gray-300 text-center outline-none focus:border-primary"
                            /> */}
                        </p>
                        <CartButton
                            variant="add"
                            onClick={toggleItemAmount({
                                option: "inc",
                                id,
                                stock,
                            })}
                            disabled={amount >= stock}
                        />
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
