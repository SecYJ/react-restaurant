import { useEffect, useState } from "react";
import OrderTable from "./OrderTable";
import OrderSummaryFooter from "./OrderSummaryFooter";
import { useCartCtx } from "../../contexts/CartCtx";

const OrderSummary = ({ navigateStep, handleNext }) => {
    const { cart } = useCartCtx();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const startPage = (currentPage - 1) * itemsPerPage;
    const endPage = itemsPerPage * currentPage;
    const pages = Math.ceil(cart.length / itemsPerPage);

    useEffect(() => {
        if (currentPage > pages) setCurrentPage(pages);
    }, [cart.length]);

    return (
        <div>
            <div className="relative flex w-full shrink-0 gap-4 overflow-hidden overflow-x-auto transition-all">
                <div className="w-full">
                    <OrderTable startRow={startPage} endRow={endPage} />
                    <OrderSummaryFooter
                        navigateStep={navigateStep}
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                        onPageChange={setCurrentPage}
                        next={handleNext}
                    />
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;
