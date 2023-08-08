import { useFormContext, useWatch } from "react-hook-form";
import InputGroup from "../InputGroup";
import PaymentMethod from "../PaymentMethod";
import ErrorMessage from "./ErrorMessage";
import SelectTime from "./SelectTime";

const defaultInputClassNames =
    "border border-transparent border-b-gray-300 py-2 outline-none";

const FormFields = () => {
    const {
        register,
        formState: { errors },
        trigger,
    } = useFormContext();

    const watchDeliveryMethod = useWatch({
        name: "deliveryMethod",
    });

    return (
        <form>
            <h2 className="col-span-full mb-4 font-bold">日期与时间</h2>
            <div className="mb-4 flex gap-4">
                <SelectTime />
            </div>
            <div className="border-b border-gray-200 pb-4">
                <h2 className="col-span-full mb-4 font-bold">个人信息</h2>
                <InputGroup label="姓名*">
                    <input
                        {...register("username")}
                        autoComplete="off"
                        placeholder="e.g Sharon"
                        className={defaultInputClassNames}
                        onBlur={(e) => trigger(e.target.value)}
                    />
                    <ErrorMessage>{errors.username?.message}</ErrorMessage>
                </InputGroup>
                <InputGroup label="手机号码">
                    <input
                        {...register("phone", { valueAsNumber: true })}
                        type="tel"
                        placeholder="e.g 123456789"
                        className={defaultInputClassNames}
                    />
                    <ErrorMessage>{errors.phone?.message}</ErrorMessage>
                </InputGroup>
                <InputGroup label="电子邮件">
                    <input
                        type="email"
                        {...register("email")}
                        placeholder="e.g johndoe@gmail.com"
                        className={defaultInputClassNames}
                        onBlur={(e) => trigger(e.target.value)}
                    />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>
                </InputGroup>
                <InputGroup label="配送方式">
                    <select
                        className="mt-2 border border-gray-300 bg-transparent p-3"
                        {...register("deliveryMethod")}
                    >
                        <option value="自取">自取</option>
                        <option value="外卖">外卖</option>
                    </select>

                    {watchDeliveryMethod === "外卖" && (
                        <InputGroup mb="mb-0 mt-1">
                            <label className="flex items-center gap-1">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 border border-gray-300 "
                                    {...register("contactLessDelivery")}
                                />
                                无接触外送
                            </label>
                        </InputGroup>
                    )}
                </InputGroup>
                {watchDeliveryMethod === "外卖" && (
                    <InputGroup label="地址" mb="mb-0">
                        <input
                            {...register("address")}
                            type="text"
                            placeholder="e.g 420 LORONG KANGSAR 1/7 TAMAN KANGSAR, 大小写均可"
                            className={defaultInputClassNames}
                            onBlur={(e) => trigger(e.target.value)}
                        />
                        <ErrorMessage>{errors.address?.message}</ErrorMessage>
                    </InputGroup>
                )}
            </div>
            <div className="mt-4">
                <h2 className="mb-4 font-bold">备注 (可选)</h2>
                <textarea
                    {...register("orderRequest")}
                    className="w-full resize-none rounded-md border border-t p-3 outline-none focus:border-secondary"
                />
                <p className="mt-1 text-xs italic">
                    *我们将尽力满足您的要求，供应情况需视供应情况而定。
                </p>
            </div>
            <PaymentMethod />
        </form>
    );
};

export default FormFields;
