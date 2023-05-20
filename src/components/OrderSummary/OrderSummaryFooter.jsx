import { useSwiper } from "swiper/react";
import { useCartCtx } from "../../contexts/CartCtx";
import Button from "../Button";
import Pagination from "../pagination";

const OrderSummaryFooter = ({
    navigateStep,
    itemsPerPage,
    currentPage,
    onPageChange,
    next,
}) => {
    const { totalUnits, totalAmount, cart } = useCartCtx();
    const swiper = useSwiper();

    const moveNextStep = () => {
        navigateStep("next");
        swiper.slideNext();
        window.scroll({ top: 0 });
    };

    return (
        <div className="mt-8 flex justify-between">
            <div>
                <p>餐点份量: {totalUnits}</p>
                <p>总额: RM {totalAmount.toFixed(2)}</p>
            </div>
            <Pagination
                pages={cart.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={onPageChange}
            />
            <Button className="px-10" onClick={moveNextStep}>
                下一步
            </Button>
        </div>
    );
};

export default OrderSummaryFooter;
