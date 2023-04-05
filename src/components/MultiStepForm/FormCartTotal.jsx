import { useCartCtx } from "../../contexts/CartCtx";

const FormCartTotal = () => {
    const { totalAmount, totalUnits } = useCartCtx();
    return (
        <div className="sticky bottom-0 left-0 right-0 flex justify-between border-t border-gray-300 bg-white p-4">
            <p className="text-base">食物数额: {totalUnits}</p>
            <p className="text-base">总额: ${totalAmount.toFixed(2)}</p>
        </div>
    );
};

export default FormCartTotal;
