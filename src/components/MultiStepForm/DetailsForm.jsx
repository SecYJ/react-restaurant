import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
    addDays,
    format,
    getDay,
    getHours,
    getMinutes,
    isSameDay,
    setHours,
    setMinutes,
} from "date-fns/esm";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";
import Button from "../Button";
import { POSTCODE_LISTS } from "../../constants/postcodeStateList";
import { error, inputStyles } from "./formStyles";

const DetailsForm = ({ onStepChange, step }) => {
    const xVariant = {
        initial: {
            x: step === 0 ? `200%` : "-100%",
        },
        animate: {
            x: 0,
        },
    };
    const {
        register,
        formState: { errors },
        // TODO: handleSubmit do later
        handleSubmit,
        watch,
    } = useForm();

    const [startDate, setStartDate] = useState(new Date());

    const watchArea = watch("area");
    const watchDelivery = watch("delivery-select");

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

    const filterOperationHours = (time) => {
        const currentDate = new Date();
        const currentHours = getHours(currentDate);
        const sameDay = isSameDay(time, currentDate);

        return (
            (sameDay && currentHours > getHours(time) && currentHours <= 13) ||
            (!sameDay && getHours(time) === 6 && getMinutes(time) === 30) ||
            (!sameDay && getHours(time) >= 7 && getHours(time) <= 13)
        );
    };

    const filterTime = (date) => {
        const currentHour = getHours(new Date()); // current hour

        console.log("args", getHours(date));
        console.log("current", getHours(new Date()));

        return getHours(date) > currentHour && currentHour < 13;
    };

    useEffect(() => {
        console.log(startDate);
    }, []);

    // const filterOperationDay = (date) => {
    //     const day = getDay(date);
    //     const currentTime = new Date().getTime();
    //     const weekTime = addDays(new Date(), 7);

    //     return (
    //         day !== 1 &&
    //         date.getTime() > currentTime &&
    //         date.getTime() < weekTime.getTime()
    //     );
    // };

    const filterOperationDay = (date) => {
        return getDay(date) !== 1;
    };

    return (
        <motion.div className="mx-auto w-full max-w-5xl shrink-0 transition-all">
            <form className="space-y-8">
                <div className="flex flex-col gap-1">
                    <label htmlFor="username">名称</label>
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
                        placeholder="Sharon"
                    />
                    {errors.username && (
                        <p className={error}>{errors?.username.message}</p>
                    )}
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="phoneNumber">手机号码</label>
                    <input
                        type="tel"
                        {...register("phoneNumber", {
                            required: "手机号码为必填栏位!",
                            valueAsNumber: true,
                            validate: numberValidation,
                        })}
                        className={`${inputStyles} [appearance:textfield]`}
                        id="phoneNumber"
                        placeholder="01234567899"
                    />
                    {errors.phoneNumber && (
                        <p className={error}>{errors.phoneNumber.message}</p>
                    )}
                </div>

                <select
                    {...register("delivery-select")}
                    id="delivery-select"
                    className={`${inputStyles} select-primary select bg-transparent`}
                >
                    <option value="">请选择配送方式</option>
                    <option value="pickup">自取</option>
                    <option value="delivery" title="(总额超过 RM 15) 免运费">
                        外卖服务
                    </option>
                </select>

                {watchDelivery === "delivery" && (
                    <div className="flex flex-col gap-1">
                        <label htmlFor="address">地址</label>
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
                            placeholder="420 LORONG KANGSAR 1/7 TAMAN KANGSAR, 大小写均可"
                        />
                        {errors.address && (
                            <p className={error}>{errors.address.message}</p>
                        )}
                    </div>
                )}
                {watchDelivery === "delivery" && (
                    <>
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
                    </>
                )}
                {watchDelivery === "delivery" && (
                    <>
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
                    </>
                )}
                <div className="space-y-4">
                    <DatePicker
                        className="rounded-sm border border-gray-300"
                        // filterTime={filterOperationHours}
                        // filterDate={filterOperationDay}
                        filterDate={filterOperationDay}
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="dd/MM/yyyy"
                        minDate={new Date()}
                        maxDate={addDays(new Date(), 7)}
                        placeholderText="请选择日期"
                        shouldCloseOnSelect={false}
                    />
                    <DatePicker
                        showTimeSelect
                        showTimeSelectOnly
                        filterTime={filterTime}
                        className="rounded-sm border border-gray-300"
                        timeFormat="h:mm aa"
                        placeholderText="请选择时间"
                        shouldCloseOnSelect={false}
                    />
                </div>
                <div className="flex justify-between">
                    <Button outline onClick={() => onStepChange(0)}>
                        返回
                    </Button>
                    <Button onClick={() => onStepChange(2)}>下一步</Button>
                </div>
            </form>
        </motion.div>
    );
};

export default DetailsForm;
