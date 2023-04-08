import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useCartCtx } from "../../contexts/CartCtx";
import Button from "../Button";
import CartButton from "../cart/CartButton";

const OrderOverviewTable = () => {
    const { dispatch, cart, totalUnits, totalAmount, toggleItemAmount } =
        useCartCtx();

    const styles = "bg-transparent text-2xl";

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
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
                        const { id, imgFallback, name, orderQty, price } = c;

                        return (
                            <tr key={id}>
                                <th style={{ position: "static" }}>
                                    {index + 1}
                                </th>
                                <td>
                                    <img
                                        src={imgFallback}
                                        className="h-24 w-24 object-cover"
                                        alt=""
                                    />
                                </td>
                                <td>{name}</td>
                                <td>
                                    <div className="flex items-center gap-8">
                                        <CartButton
                                            variant="minus"
                                            onClick={toggleItemAmount({
                                                id,
                                                stock,
                                            })}
                                        />
                                        {orderQty}
                                        <CartButton variant="add" />
                                    </div>
                                </td>
                                <td>{orderQty * price}</td>
                                <td>
                                    <Button outline>移除</Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="mr-6 mt-20 flex items-center justify-between">
                <div>
                    <p>餐点份量: {totalUnits}</p>
                    <p>总额: {totalAmount}</p>
                </div>
                <Button outline className="px-10">
                    下一步
                </Button>
            </div>
        </div>
    );
};

export default OrderOverviewTable;
{
    /* <th className="font-semibold">餐点名称</th>
<th className="font-semibold">数量</th>
<th className="font-semibold">3</th> */
}
