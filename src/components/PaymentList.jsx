import { useFormContext, useWatch } from "react-hook-form";

const PaymentList = () => {
    const { register } = useFormContext();

    const [contactLessDelivery, paymentMethod, deliveryMethod] = useWatch({
        name: ["contactLessDelivery", "paymentMethod", "deliveryMethod"],
    });

    return (
        <>
            {(!contactLessDelivery || deliveryMethod === "delivery") && (
                <label>
                    <input
                        type="radio"
                        className="mr-1"
                        value="cashOnDelivery"
                        {...register("paymentMethod", { required: true })}
                    />
                    货到付款
                </label>
            )}
            <label className="block w-max">
                <input
                    type="radio"
                    className="mr-1"
                    value="creditCard"
                    {...register("paymentMethod", { required: true })}
                />
                信用卡
            </label>
            <label className="block w-max">
                <input
                    type="radio"
                    value="onlineBanking"
                    {...register("paymentMethod", { required: true })}
                    className="mr-1"
                />
                网上银行交易
            </label>
            <label className="block w-max">
                <input
                    type="radio"
                    value="eWallet"
                    className="mr-1"
                    {...register("paymentMethod", { required: true })}
                />
                电子钱包
            </label>
            {paymentMethod === "eWallet" && (
                <>
                    <select
                        className="mt-4 block w-max min-w-[300px] border border-gray-300 bg-transparent p-3"
                        {...register("eWallet", { required: true })}
                        value={register.eWallet}
                    >
                        <option value="GrabPay">GrabPay</option>
                        <option value="Boost">Boost</option>
                        <option value="TouchNGo">Touch 'n Go eWallet</option>
                    </select>
                </>
            )}
        </>
    );
};

export default PaymentList;
