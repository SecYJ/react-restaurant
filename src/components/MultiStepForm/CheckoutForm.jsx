import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { POSTCODE_LISTS } from "../../constants/postcodeStateList";
import { error, inputStyles } from "./formStyles";

const CheckoutForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
    } = useForm();

    // TODO: fix the select bugs

    const watchArea = watch("area");
    console.log(watchArea);

    const areaAvailability = watchArea
        ? POSTCODE_LISTS.find((a) => a.name === watchArea)
        : null;

    const numberValidation = useCallback((val) => {
        const transformedValue = val.toString();
        if (transformedValue.length > 11) return "手机号码不可超过 11 个数字!";

        const regexPattern = /\D/g;
        return regexPattern.test(transformedValue)
            ? "手机号码只限数字!"
            : Number(val);
    }, []);

    const submit = (e) => {
        // e.preventDefault();
        console.log(e);
        console.log(errors);
    };

    return (
        <div>
            <h1>客户资料</h1>
            <form
                className="mt-8 grid grid-cols-2 gap-10"
                onSubmit={handleSubmit(submit)}
            >
                <div className="">
                    <label htmlFor="username" className="text-lg">
                        名称
                    </label>
                    <input
                        type="text"
                        {...register("username", {
                            required: "名称为必填栏位!",
                            maxLength: {
                                value: 20,
                                message: "名称长度不可超过 20 个文字!",
                            },
                        })}
                        className={inputStyles}
                        id="username"
                    />
                    {errors?.username?.message && (
                        <p className={error}>{errors?.username.message}</p>
                    )}
                </div>
                <div className="">
                    <label htmlFor="phoneNumber" className="text-lg">
                        手机号码
                    </label>
                    <input
                        type="tel"
                        {...register("phoneNumber", {
                            required: "手机号码为必填栏位!",
                            valueAsNumber: true,
                            validate: numberValidation,
                        })}
                        className={`${inputStyles} [appearance:textfield]`}
                        id="phoneNumber"
                        placeholder="hello"
                    />
                    {errors?.phoneNumber?.message && (
                        <p className={error}>{errors?.phoneNumber?.message}</p>
                    )}
                </div>

                <div className="col-span-full">
                    <label className="text-lg">地址</label>
                    <input
                        type="text"
                        {...register("address", {
                            required: {
                                value: true,
                                message: "地址栏位不得为空",
                            },
                        })}
                        className={inputStyles}
                    />
                    {errors?.address?.message && (
                        <p className={error}>{errors.address.message}</p>
                    )}
                </div>
                <div className="">
                    <label htmlFor="area" className="text-lg">
                        地区
                    </label>
                    <select
                        {...register("area")}
                        id="area"
                        className={`${inputStyles} bg-transparent`}
                        defaultValue="请选择地区"
                    >
                        <option disabled>请选择地区</option>
                        {POSTCODE_LISTS.map((c) => (
                            <option key={c.name} value={c.name}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="">
                    <label htmlFor="area" className="text-lg">
                        邮政编码
                    </label>
                    <select
                        disabled={!watchArea}
                        {...register("postcode", {
                            required: true,
                        })}
                        id="postcode"
                        className={`${inputStyles} ${
                            watchArea
                                ? "enabled:bg-transparent"
                                : "cursor-not-allowed disabled:bg-gray-200"
                        }`}
                        defaultValue="请选择邮政编码"
                    >
                        <option disabled>请选择邮政编码</option>
                        {areaAvailability?.postcodes.map((c) => (
                            <option value={c} key={c}>
                                {c}
                            </option>
                        ))}
                    </select>
                    {errors?.postcode?.message && (
                        <p className={error}>{errors?.postcode?.message}</p>
                    )}
                </div>
                <button type="submit" className="border border-gray-300">
                    submit
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;
