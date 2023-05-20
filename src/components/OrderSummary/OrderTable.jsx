import OrderTableHeader from "./OrderTableHeader";
import OrderTableRow from "./OrderTableRow";

const OrderTable = ({ startRow, endRow }) => {
    return (
        <table className="table w-full text-center">
            <OrderTableHeader />
            <OrderTableRow startRow={startRow} endRow={endRow} />
        </table>
    );
};

export default OrderTable;
