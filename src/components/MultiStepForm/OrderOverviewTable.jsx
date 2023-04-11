import { useCartCtx } from "../../contexts/CartCtx";
import Button from "../Button";
import CartButton from "../cart/CartButton";

const OrderOverviewTable = ({ onStepChange }) => {
    const { cart, totalUnits, totalAmount, updateCartItem, deleteCartItem } =
        useCartCtx();

    const styles = "bg-transparent text-2xl";

    return (
        <div className="overflow-x-auto">
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
                            <tr key={id}>
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
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="mr-6 flex items-center justify-end">
                <div className="flex flex-col items-end">
                    <div>
                        <p>餐点份量: {totalUnits}</p>
                        <p>总额: RM {totalAmount.toFixed(2)}</p>
                    </div>
                    <Button
                        className="mt-6 px-10"
                        onClick={() => onStepChange(1)}
                    >
                        下一步
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default OrderOverviewTable;
