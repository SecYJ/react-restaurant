import { useCartCtx } from "../../contexts/CartCtx";
import Button from "../Button";

const OrderOverviewTotal = ({ onStepChange }) => {
    const { totalUnits, totalAmount } = useCartCtx();

    return (
        <div className="sticky top-0 left-0 right-0 mr-6 h-full w-[200px] p-4">
            <p>餐点份量: {totalUnits}</p>
            <p>总额: RM {totalAmount.toFixed(2)}</p>

            <Button
                className="mt-6 px-10"
                onClick={() => {
                    onStepChange(1);
                }}
            >
                下一步
            </Button>
        </div>
    );
};

export default OrderOverviewTotal;
