import { usePaymentCtx } from "../contexts/PaymentCtx";

const PurchasedTable = () => {
    const { paymentData } = usePaymentCtx();
    const { total, totalUnits, cart: purchaseList } = paymentData;

    return (
        <table className="table w-full">
            <thead className="border-b-2 border-gray-300">
                <tr>
                    <td className="bg-white text-base" align="center">
                        商品
                    </td>
                    <td className="bg-white text-base" align="center">
                        数量
                    </td>
                    <td className="bg-white text-base" align="center">
                        小计
                    </td>
                </tr>
            </thead>
            <tbody>
                {purchaseList.map((item) => {
                    const { id, orderQty, price, name } = item;
                    return (
                        <tr className="border-b" key={id}>
                            <td>{name}</td>
                            <td className="text-center">{orderQty}</td>
                            <td className="text-center">
                                RM {price.toFixed(2)}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
            <tfoot>
                <tr className="text-center">
                    <td className="bg-white"></td>
                    <td className="bg-white text-lg">总数量: {totalUnits}</td>
                    <td className="bg-white text-lg">总额: RM {total}</td>
                </tr>
            </tfoot>
        </table>
    );
};

export default PurchasedTable;
