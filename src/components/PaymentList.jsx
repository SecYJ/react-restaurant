import { useFormContext, useWatch } from "react-hook-form";

const PaymentList = () => {
    const { register } = useFormContext();

    const [contactLessDelivery, paymentRadio] = useWatch({
        name: ["contactLessDelivery", "paymentRadio"],
    });

    return (
        <>
            {!contactLessDelivery && (
                <label>
                    <input
                        type="radio"
                        className="mr-1"
                        value="cashOnDelivery"
                        {...register("paymentRadio", { required: true })}
                    />
                    货到付款
                </label>
            )}
            <label className="block w-max">
                <input
                    type="radio"
                    className="mr-1"
                    value="creditCard"
                    {...register("paymentRadio", { required: true })}
                />
                信用卡
            </label>
            <label className="block w-max">
                <input
                    type="radio"
                    value="onlineBanking"
                    {...register("paymentRadio", { required: true })}
                    className="mr-1"
                />
                网上银行交易
            </label>
            <label className="block w-max">
                <input
                    type="radio"
                    value="eWallet"
                    className="mr-1"
                    {...register("paymentRadio", { required: true })}
                />
                电子钱包
            </label>
            {paymentRadio === "eWallet" && (
                <>
                    <select
                        className="mt-4 block w-max min-w-[300px] border border-gray-300 bg-transparent p-3"
                        {...register("eWallet", { required: true })}
                    >
                        <option value="">选择电子钱包</option>
                        <option value="GrabPay">GrabPay</option>
                        <option value="Boost">Boost</option>
                        <option value="TouchNGo">Touch 'n Go eWallet</option>
                    </select>
                </>
            )}
            {/* {errors.paymentRadio && (
                <p className="mt-1 text-red-500">付款选项未选择</p>
            )} */}
        </>
    );
};

export default PaymentList;
