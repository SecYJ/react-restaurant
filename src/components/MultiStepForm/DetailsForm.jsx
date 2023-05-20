import { useCallback, useState } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { addDays, getDay, getHours, getMinutes } from "date-fns/esm";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../Button";
import { POSTCODE_LISTS } from "../../constants/postcodeStateList";
import { error, inputStyles } from "./formStyles";
import { useSwiper } from "swiper/react";

const DetailsForm = ({ navigateStep }) => {
    const swiper = useSwiper();

    const movePrevStep = () => {
        navigateStep("prev");
        swiper.slidePrev();
    };

    // const {
    //     register,
    //     formState: { errors },
    //     handleSubmit,
    //     watch,
    //     control,
    // } = useForm();

    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
        getValues,
        control,
    } = useFormContext();

    const [startDate, setStartDate] = useState("");
    const [startTime, setStartTime] = useState("");

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

    const filterTime = (date) => {
        const hour = getHours(date);

        return (
            (hour === 13 && getMinutes(date) !== 30) ||
            (hour >= 6 && hour <= 12)
        );
    };
    const filterOperationDay = (date) => {
        return getDay(date) !== 1;
    };

    const onFormSubmit = (inputData) => {
        // TODO:
        if (startTime === "" || startTime === "") return;
        navigateStep("next");
        swiper.slideNext();
    };

    return (
        <div>
            <div className="mx-auto w-full shrink-0 transition-all">
                <form
                    className="space-y-8"
                    onSubmit={handleSubmit(onFormSubmit)}
                >
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
                    <div>
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
                            <p className={error}>
                                {errors.phoneNumber.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <select
                            {...register("deliverySelect", {
                                required: "配送方式不得为空",
                            })}
                            id="deliverySelect"
                            className={`${inputStyles} select bg-transparent`}
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
                        {errors.deliverySelect && (
                            <p className={error}>
                                {errors.deliverySelect.message}
                            </p>
                        )}
                    </div>
                    {watchDelivery === "delivery" && (
                        <div>
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
                                <p className={error}>
                                    {errors.address.message}
                                </p>
                            )}
                        </div>
                    )}
                    {watchDelivery === "delivery" && (
                        <div>
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
                                <p className={error}>
                                    {errors.postcode.message}
                                </p>
                            )}
                        </div>
                    )}
                    <div className="grid gap-2 lg:grid-cols-2">
                        <div>
                            <DatePicker
                                className="rounded-sm border border-gray-300 outline-none focus:border-primary"
                                filterDate={filterOperationDay}
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                dateFormat="dd/MM/yyyy"
                                minDate={new Date()}
                                maxDate={addDays(new Date(), 7)}
                                placeholderText="请选择日期"
                                shouldCloseOnSelect={false}
                                disabled={!watchDelivery}
                            />
                            <p>hi</p>
                        </div>
                        <div>
                            <DatePicker
                                showTimeSelect
                                showTimeSelectOnly
                                onChange={(date) => setStartTime(date)}
                                filterTime={filterTime}
                                className="rounded-sm border border-gray-300 outline-none focus:border-primary"
                                dateFormat="h:mm aa"
                                placeholderText="请选择时间"
                                shouldCloseOnSelect={false}
                                disabled={!watchDelivery}
                                selected={startTime}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <Button outline onClick={() => movePrevStep()}>
                            返回
                        </Button>
                        <Button type="submit">下一步</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DetailsForm;
