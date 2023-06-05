import OrderTableHeader from "./OrderTableHeader";
import OrderTableRow from "./OrderTableRow";

const OrderTable = () => {
    return (
        <table className="table w-full text-center">
            <OrderTableHeader />
            <OrderTableRow />
        </table>
    );
};

export default OrderTable;
