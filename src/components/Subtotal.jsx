import { useFormContext, useWatch } from "react-hook-form";
import { useCartCtx } from "../contexts/CartCtx";
import { useFormDataContext } from "../contexts/FormCtx";
import { usePaymentCtx } from "../contexts/PaymentCtx";
import useTotalAmount from "../hooks/useTotalAmount";
import Loading from "../assets/spinner-loading.svg";
import useOrder from "../hooks/useOrder";

const Subtotal = ({ onNextStepChange }) => {
    const { totalAmount, totalUnits, cart } = useCartCtx();
    const { setPaymentData } = usePaymentCtx();
    const {
        handleSubmit,
        formState: { isValid },
    } = useFormContext();
    const { businessHours, deliveryDate } = useFormDataContext();

    const watchDeliveryMethod = useWatch({ name: "deliveryMethod" });

    const { sst, total } = useTotalAmount(totalAmount, watchDeliveryMethod);

    const { isLoading, mutate } = useOrder(onNextStepChange);

    const onSubmit = (data) => {
        const { address, deliveryMethod, paymentRadio, eWallet } = data;

        if (businessHours === "" || deliveryDate === "") return;
        if (deliveryMethod === "delivery" && address.trim() === "") return;
        if (paymentRadio === "eWallet" && eWallet === "") return;

        const paymentData = {
            ...data,
            total,
            totalUnits,
            businessHours,
            deliveryDate,
            cart: [...cart],
        };

        mutate({
            ...paymentData,
            deliveryDate: new Intl.DateTimeFormat().format(
                new Date(deliveryDate)
            ),
            id: crypto.randomUUID(),
        });
        setPaymentData(paymentData);
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
                        {watchDeliveryMethod === "外送" ? "RM 5.00" : "RM 0.00"}
                    </p>
                </li>
                <li className="flex justify-between">
                    <p>服务税</p>
                    <p>RM {sst}</p>
                </li>
            </ul>
            <strong className="mt-4 mb-8 flex justify-between border-t border-t-gray-300 pt-4 text-base">
                <span>总额 (包含 SST)</span>
                <span>RM {total}</span>
            </strong>
            <button
                type="button"
                className={`flex w-full items-center justify-center rounded-full py-2 text-white ${
                    isValid && businessHours && deliveryDate
                        ? "pointer-events-auto bg-primary"
                        : "pointer-events-none bg-gray-400"
                }`}
                disabled={!isValid}
                onClick={handleSubmit(onSubmit)}
            >
                前往付款
                {isLoading && <img src={Loading} />}
            </button>
        </>
    );
};

export default Subtotal;
