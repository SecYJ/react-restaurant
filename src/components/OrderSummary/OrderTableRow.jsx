import { motion } from "framer-motion";
import { useCartCtx } from "../../contexts/CartCtx";
import Button from "../Button";
import CartButton from "../cart/CartButton";

const OrderTableRow = ({ startRow, endRow }) => {
    const { cart, updateCartItem, deleteCartItem } = useCartCtx();

    return (
        <tbody>
            {cart
                .map((c, index) => {
                    const { id, imgFallback, name, orderQty, price, stock } = c;

                    return (
                        <motion.tr
                            key={id}
                            className="hover hover:bg-[rgb(229,230,230)]"
                            layout
                        >
                            <th style={{ position: "static" }}>{index + 1}</th>
                            <td>
                                <img
                                    src={imgFallback}
                                    className="mx-auto h-24 w-24 object-cover"
                                />
                            </td>
                            <td>{name}</td>
                            <td>
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
                            <td>{(orderQty * price).toFixed(2)}</td>
                            <td>
                                <Button
                                    outline
                                    onClick={() => deleteCartItem(id)}
                                >
                                    移除
                                </Button>
                            </td>
                        </motion.tr>
                    );
                })
                .slice(startRow, endRow)}
        </tbody>
    );
};

export default OrderTableRow;
