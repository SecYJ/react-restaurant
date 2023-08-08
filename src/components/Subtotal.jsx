import { useFormContext, useWatch } from "react-hook-form";
import { useCartCtx } from "../contexts/CartCtx";
import { useFormDataContext } from "../contexts/FormCtx";
import { usePaymentCtx } from "../contexts/PaymentCtx";
import useTotalAmount from "../hooks/useTotalAmount";
import useOrder from "../hooks/useOrder";
import { toast } from "react-toastify";

// The reason i create this function because json server basically response immediately after dispatch a post request
const simulateAsync = () => {
    return new Promise((resolve) => setTimeout(resolve, 3000));
};

const Subtotal = ({ onNextStepChange }) => {
    const { totalAmount, totalUnits, cart } = useCartCtx();
    const { setPaymentData } = usePaymentCtx();
    const {
        handleSubmit,
        formState: { isValid, isSubmitting, isSubmitSuccessful },
        reset,
    } = useFormContext();
    const { businessHours, deliveryDate } = useFormDataContext();

    const watchDeliveryMethod = useWatch({ name: "deliveryMethod" });
    const watchPaymentMethod = useWatch({ name: "paymentMethod" });
    const { sst, total } = useTotalAmount(totalAmount, watchDeliveryMethod);
    const grossTotal =
        watchDeliveryMethod === "外卖" ? (Number(total) + 5).toFixed(2) : total;

    const { mutate } = useOrder(simulateAsync);

    const onSubmit = async (data) => {
        // To prevent user continuously pressing
        if (isSubmitting || isSubmitSuccessful) return;
        const { address, deliveryMethod, paymentMethod, eWallet } = data;

        if (businessHours === "" || deliveryDate === "") return;
        if (deliveryMethod === "delivery" && address.trim() === "") return;
        if (paymentMethod === "eWallet" && eWallet === "") return;

        const paymentData = {
            ...data,
            totalUnits,
            businessHours,
            deliveryDate,
            cart: [...cart],
            total: grossTotal,
        };

        setPaymentData(paymentData);

        await toast.promise(simulateAsync, {
            pending: "正在处理您的订单, 请别关闭网页",
            success: "付款成功",
            error: "付款失败, 系统问题请稍后重试",
        });

        mutate({
            ...paymentData,
            deliveryDate: new Intl.DateTimeFormat().format(
                new Date(deliveryDate)
            ),
            id: crypto.randomUUID(),
        });

        onNextStepChange();
        reset();
    };

    return (
        <>
            <ul className="space-y-2">
                <li className="flex justify-between">
                    <p>小计</p>
                    <p>RM {totalAmount.toFixed(2)}</p>
                </li>
                <li className="flex justify-between">
                    <p>运输费</p>
                    <p>
                        {watchDeliveryMethod === "外卖" ? "RM 5.00" : "RM 0.00"}
                    </p>
                </li>
                <li className="flex justify-between">
                    <p>服务税</p>
                    <p>RM {sst}</p>
                </li>
            </ul>
            <strong className="mt-4 mb-8 flex justify-between border-t border-t-gray-300 pt-4 text-base">
                <span>总额 (包含 SST)</span>
                <span>
                    RM{" "}
                    {watchDeliveryMethod === "外卖"
                        ? (Number(total) + 5).toFixed(2)
                        : total}
                </span>
            </strong>
            <button
                type="button"
                className="flex w-full items-center justify-center rounded-full py-2 text-white
                enabled:pointer-events-auto enabled:bg-primary 
                disabled:pointer-events-none
                disabled:bg-gray-400"
                disabled={
                    !isValid ||
                    !watchPaymentMethod ||
                    !businessHours ||
                    !deliveryDate
                }
                onClick={handleSubmit(onSubmit)}
            >
                前往付款
            </button>
        </>
    );
};

export default Subtotal;
