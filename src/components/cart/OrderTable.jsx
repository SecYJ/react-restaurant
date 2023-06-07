import OrderTableHeader from "./OrderTableHeader";
import CartRow from "./CartRow";

const OrderTable = () => {
    return (
        <table className="table w-full text-center">
            <OrderTableHeader />
            <CartRow />
        </table>
    );
};

export default OrderTable;
