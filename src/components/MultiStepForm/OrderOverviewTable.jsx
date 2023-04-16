import { motion } from "framer-motion";
import { useCartCtx } from "../../contexts/CartCtx";
import Button from "../Button";
import CartButton from "../cart/CartButton";
import OrderOverviewTotal from "./OrderOverviewTotal";

const variantItem = {
    initial: {
        opacity: 0,
        x: "-200px",
    },
    animate: (custom) => {
        return {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                delay: custom * 0.1,
                // staggerChildren: 0.1,
            },
        };
    },
    exit: {
        x: "200px",
        opacity: 0,
    },
};

const OrderOverviewTable = ({ onStepChange, step }) => {
    const { cart, updateCartItem, deleteCartItem } = useCartCtx();

    const xVariant = {
        initial: {
            x: step === 0 ? "100%" : `-${step * 100}%`,
        },
        animate: 0,
    };
    const styles = "bg-transparent text-2xl";

    return (
        <div className="relative flex w-full shrink-0 gap-4 overflow-hidden overflow-x-auto transition-all">
            <table className="table w-full text-center">
                <thead>
                    <tr>
                        <th className={styles}></th>
                        <th className={styles}>图片</th>
                        <th className={styles}>名称</th>
                        <th className={styles}>数量</th>
                        <th className={styles}>价格</th>
                        <th className={styles}></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((c, index) => {
                        const {
                            id,
                            imgFallback,
                            name,
                            orderQty,
                            price,
                            stock,
                        } = c;

                        return (
                            <motion.tr
                                variants={variantItem}
                                {...variantItem}
                                key={id}
                                custom={index}
                                className="hover hover:bg-[rgb(229,230,230)]"
                                layoutId={id}
                            >
                                <th style={{ position: "static" }}>
                                    {index + 1}
                                </th>
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
                    })}
                </tbody>
            </table>
            <OrderOverviewTotal onStepChange={onStepChange} />
        </div>
    );
};

export default OrderOverviewTable;
