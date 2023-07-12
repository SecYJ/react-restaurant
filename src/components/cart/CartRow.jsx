import { motion } from "framer-motion";
import { useCartCtx } from "../../contexts/CartCtx";
import Button from "../Button";
import CartButton from "./CartButton";

const CartRow = () => {
    const { cart, updateCartItem, deleteCartItem } = useCartCtx();

    return (
        <tbody>
            {cart.map((c, index) => {
                const { id, img, name, orderQty, price, stock } = c;

                return (
                    <motion.tr
                        key={id}
                        className="hover hover:bg-[rgb(229,230,230)]"
                        layoutId={id}
                    >
                        <th
                            style={{
                                position: "static",
                            }}
                            className="hidden lg:table-cell"
                        >
                            {index + 1}
                        </th>
                        <td className="hidden lg:table-cell">
                            <img
                                src={img}
                                className="h-24 w-full object-cover"
                            />
                        </td>
                        <td className="hidden lg:table-cell">
                            <p>{name}</p>
                        </td>
                        <td className="lg:hidden">
                            <div className="flex gap-3">
                                <img
                                    src={img}
                                    className="h-24 w-24 object-cover"
                                />
                                <div className="flex flex-col items-start justify-between">
                                    <p>{name}</p>
                                    <strong>
                                        RM {(orderQty * price).toFixed(2)}
                                    </strong>
                                    <div className="flex items-center justify-center gap-3">
                                        <CartButton
                                            variant="minus"
                                            disabled={orderQty - 1 < 1}
                                            onClick={() => {
                                                if (orderQty - 1 < 1) return;
                                                updateCartItem({
                                                    direction: "decrement",
                                                    id,
                                                });
                                            }}
                                        />
                                        <p className="min-w-[50px]">
                                            {orderQty}
                                        </p>
                                        <CartButton
                                            variant="add"
                                            disabled={orderQty + 1 > stock}
                                            onClick={() => {
                                                if (orderQty + 1 > stock)
                                                    return;
                                                updateCartItem({
                                                    id,
                                                    direction: "increment",
                                                });
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className="hidden lg:table-cell">
                            <div className="flex items-center justify-center gap-8">
                                <CartButton
                                    variant="minus"
                                    disabled={orderQty - 1 < 1}
                                    onClick={() => {
                                        if (orderQty - 1 < 1) return;
                                        updateCartItem({
                                            direction: "decrement",
                                            id,
                                        });
                                    }}
                                />
                                <p className="min-w-[50px]">{orderQty}</p>
                                <CartButton
                                    variant="add"
                                    disabled={orderQty + 1 > stock}
                                    onClick={() => {
                                        if (orderQty + 1 > stock) return;
                                        updateCartItem({
                                            id,
                                            direction: "increment",
                                        });
                                    }}
                                />
                            </div>
                        </td>
                        <td className="hidden lg:table-cell">
                            RM {(orderQty * price).toFixed(2)}
                        </td>
                        <td className="">
                            <Button outline onClick={() => deleteCartItem(id)}>
                                移除
                            </Button>
                        </td>
                    </motion.tr>
                );
            })}
        </tbody>
    );
};

export default CartRow;
