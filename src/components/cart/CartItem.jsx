import { useId } from "react";
import { useForm } from "react-hook-form";
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
    const { dispatch } = useCartCtx();
    const { register, getValues, setValue } = useForm();
    const inputId = useId();
    const [cName, ...eName] = name.split(" ");
    const englishName = eName.join(" ");
    const totalPrice = (amount * price).toFixed(2);

    const setState = (amount, method) => {
        dispatch({
            type: `ITEM_AMOUNT_${method.toUpperCase()}`,
            payload: {
                id,
                amount,
            },
        });
    };

    const getCartInputValue = () => getValues("cart-input");
    const setCartInputValue = (val) => setValue("cart-input", val);

    const increment = () => {
        const value = getCartInputValue("cart-input");
        const result = value + 1 > stock ? stock : value + 1;
        setCartInputValue(result);
        setState(result, "increment");
    };

    const decrement = () => {
        const value = getCartInputValue("cart-input");
        const result = value - 1 < 1 ? 1 : value - 1;
        setCartInputValue(result);
        setState(result, "decrement");
    };

    const handleInputBlur = () => {
        const value = getCartInputValue("cart-input");
        if (!value) setCartInputValue(1);
    };

    const inputChange = (e) => {
        const { value } = e.target;
        const pattern = /[^0-9]/g;
        const containsString = pattern.test(value);

        if (value === "") return;

        if (containsString) {
            e.target.value = e.target.value.replace(pattern, "");
            return;
        }

        if (Number(value) > stock) {
            e.target.value = stock;
            setState(stock, "input");
            return;
        }

        setState(Number(value), "input");
    };

    return (
        <li className="flex py-6">
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
                            onClick={() => decrement()}
                            disabled={amount === 1}
                        />
                        <p className="flex min-w-[45px] text-gray-500">
                            <label htmlFor={inputId}>Qty</label>
                            <input
                                type="text"
                                id={inputId}
                                {...register("cart-input", {
                                    onChange: inputChange,
                                    valueAsNumber: true,
                                    onBlur: handleInputBlur,
                                    value: amount,
                                })}
                                className="ml-2 w-[50px] border border-gray-300 text-center outline-none focus:border-primary"
                            />
                        </p>
                        <CartButton
                            variant="add"
                            onClick={() => increment()}
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
