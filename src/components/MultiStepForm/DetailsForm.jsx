import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getDay, getHours, getMinutes, setDay, setHours } from "date-fns/esm";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../Button";
import { POSTCODE_LISTS } from "../../constants/postcodeStateList";
import { error, inputStyles } from "./formStyles";

const DetailsForm = ({ onNextClick, onStepChange }) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
    } = useForm();

    const [startDate, setStartDate] = useState(new Date());

    const watchArea = watch("area");
    const watchDelivery = watch("delivery-select");

    console.log(watchDelivery);

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
        onNextClick(2);
        // e.preventDefault();
    };

    const filterOperationHours = (time) => {
        // console.log(isBefore(new Date(), time));
        // console.log(getHours(time));
        const currentDate = new Date();
        // const hours = getHours(time);
        // console.log(hours);

        // const year = getYear(time);
        // const month = getMonth(time)

        // const t = setHours(new Date(format(time, "YYYY,")));
        // const startHours = setHours(new Date())

        console.log(getHours(time), getMinutes(time));
        const hours = getHours(time);

        // return (
        //     hours >= 6 && hours <= 13 && hours > 6 && getMinutes(time) === 30
        // );

        // TODO: fix later, got bugs here
        return (
            (hours === 6 && getMinutes(time) === 30) ||
            (hours > 6 && hours <= 13) ||
            currentDate.getTime() > time.getTime()
        );

        // NOTE: turn below on if later wnat to recover
        // return time > 6 && hours < 13;
        // const selectedDate = new Date(time);
        // const afterFiveMinutes = setMinutes(new Date(), 31);
        // console.log(afterFiveMinutes);
        // return currentDate.getTime() < selectedDate.getTime();
        // return (
        //     currentDate.getTime() < selectedDate.getTime()
        // currentDate.getTime() < new Date(afterFiveMinutes).getTime()
        // );
    };

    const filterOperationDay = (date) => {
        const day = getDay(date);
        const currentTime = new Date().getTime();
        const weekTime = setDay(new Date(), 7);

        return (
            day !== 1 &&
            currentTime < date.getTime() &&
            date.getTime() < weekTime.getTime()
        );
    };

    return (
        <div className="mx-auto max-w-4xl">
            <h1>客户资料</h1>
            <form className="space-y-8" onSubmit={handleSubmit(submit)}>
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
                    {errors.username && (
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
                    {errors.phoneNumber && (
                        <p className={error}>{errors.phoneNumber.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="delivery-select" className="text-lg">
                        选择配送方式
                    </label>
                    <select
                        {...register("delivery-select")}
                        id="delivery-select"
                        className={`${inputStyles} bg-transparent`}
                    >
                        <option value="">请选择配送方式</option>
                        <option value="pickup">自取</option>
                        <option
                            value="delivery"
                            title="(总额超过 RM 15) 免运费"
                        >
                            外卖服务
                        </option>
                    </select>
                </div>

                {watchDelivery === "delivery" && (
                    <div>
                        <label className="text-lg" htmlFor="address">
                            地址
                        </label>
                        <input
                            type="text"
                            id="address"
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: "地址栏位不得为空",
                                },
                            })}
                            className={inputStyles}
                        />
                        {errors.address && (
                            <p className={error}>{errors.address.message}</p>
                        )}
                    </div>
                )}
                {watchDelivery === "delivery" && (
                    <div>
                        <label htmlFor="area" className="text-lg">
                            地区
                        </label>
                        <select
                            {...register("area", {
                                required: {
                                    value: true,
                                    message: "地区不得为空",
                                },
                            })}
                            id="area"
                            className={`${inputStyles} bg-transparent`}
                            defaultValue="请选择地区"
                        >
                            <option value="">请选择地区</option>
                            {POSTCODE_LISTS.map((c) => (
                                <option key={c.name} value={c.name}>
                                    {c.name}
                                </option>
                            ))}
                        </select>
                        {errors.area && (
                            <p className={error}>{errors.area.message}</p>
                        )}
                    </div>
                )}
                {watchDelivery === "delivery" && (
                    <div>
                        <label htmlFor="area" className="text-lg">
                            邮政编码
                        </label>
                        <select
                            disabled={!watchArea}
                            {...register("postcode", {
                                required: {
                                    value: true,
                                    message: "邮政编码不得为空!",
                                },
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
                        {errors.postcode && (
                            <p className={error}>{errors.postcode.message}</p>
                        )}
                    </div>
                )}
                <div>
                    <DatePicker
                        className="border border-gray-300"
                        showTimeSelect
                        filterTime={filterOperationHours}
                        filterDate={filterOperationDay}
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="dd/MM/yyyy h:mm aa"
                        // maxDate={addDays(new Date(), 7)}
                        // minDate={subDays(new Date(), 0)}
                    />
                </div>
                <div className="flex justify-between">
                    <Button outline onClick={() => onStepChange(0)}>
                        返回
                    </Button>
                    <Button onClick={() => onStepChange(2)}>下一步</Button>
                </div>
            </form>
        </div>
    );
};

export default DetailsForm;
