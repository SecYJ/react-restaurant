import { useFormContext, useWatch } from "react-hook-form";
import {
    addDays,
    differenceInMinutes,
    getDay,
    getHours,
    getMinutes,
    isSameDay,
} from "date-fns/esm";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputGroup from "./InputGroup";
import { useFormDataContext } from "../contexts/FormCtx";
import PaymentMethod from "./PaymentMethod";

const FormFields = () => {
    const {
        register,
        formState: { errors },
        trigger,
    } = useFormContext();

    const { startDate, setStartDate, startTime, setStartTime } =
        useFormDataContext();

    const deliveryMethod = useWatch({
        name: "deliveryMethod",
    });

    const numberValidation = (v) => {
        const pattern = /\d/;
        return pattern.test(v) ? v : "请确保手机号码只包含数字";
    };

    const filterOperationDay = (date) => {
        return getDay(date) !== 1;
    };

    const filterTime = (date) => {
        const hour = getHours(date);
        const minuteDifference = differenceInMinutes(date, new Date()) >= 30; // greater or equal 30m can booking
        const isToday = isSameDay(startDate, new Date());
        const morningBookingHour = hour >= 6 && hour <= 12;
        const afternoonBookingHour = hour === 13 && getMinutes(date) !== 30;

        return isToday
            ? (minuteDifference && morningBookingHour) ||
                  (minuteDifference && afternoonBookingHour)
            : startDate === ""
            ? false
            : morningBookingHour || afternoonBookingHour;
    };

    const onDateChange = (date) => {
        setStartDate(date);
        setStartTime("");
    };

    return (
        <form>
            <h2 className="col-span-full mb-4 font-bold">添加您的信息</h2>
            <div className="mb-4 flex gap-4">
                <DatePicker
                    className="rounded-sm border border-gray-300 outline-none focus:border-primary"
                    filterDate={filterOperationDay}
                    selected={startDate}
                    onChange={onDateChange}
                    dateFormat="dd/MM/yyyy"
                    minDate={new Date()}
                    maxDate={addDays(new Date(), 7)}
                    placeholderText="请选择日期"
                    shouldCloseOnSelect={false}
                />
                <DatePicker
                    showTimeSelect
                    showTimeSelectOnly
                    onChange={(date) => setStartTime(date)}
                    filterTime={filterTime}
                    className="rounded-sm border border-gray-300 outline-none focus:border-primary"
                    dateFormat="h:mm aa"
                    placeholderText="请选择时间"
                    shouldCloseOnSelect={false}
                    selected={startTime}
                    onBlur={onBlurTimeValidation}
                />
            </div>

            <div className="border-b border-gray-200 pb-4">
                <h2 className="col-span-full mb-4 font-bold">添加您的信息</h2>
                <InputGroup label="姓名*">
                    <input
                        {...register("username", {
                            required: "姓名栏位为必填",
                            maxLength: {
                                value: 20,
                                message: "姓名长度不可超过 20 个文字",
                            },
                        })}
                        onBlur={(e) => trigger(e.target.name)}
                        autoComplete="off"
                        placeholder="e.g Sharon"
                        className="border border-transparent border-b-gray-300 py-2 outline-none"
                    />
                    {errors.username && (
                        <p className="mt-1 text-red-500">
                            {errors.username.message}
                        </p>
                    )}
                </InputGroup>
                <InputGroup label="手机号码">
                    <input
                        {...register("phone", {
                            required: "手机号码不得为空",
                            valueAsNumber: true,
                            validate: numberValidation,
                        })}
                        onBlur={(e) => trigger(e.target.name)}
                        type="tel"
                        placeholder="e.g 123456789"
                        className="border border-transparent border-b-gray-300 py-2 outline-none"
                    />
                    {errors.phone && (
                        <p className="mt-1 text-red-500">
                            {errors.phone.message}
                        </p>
                    )}
                </InputGroup>
                <InputGroup label="电子邮件">
                    <input
                        type="email"
                        {...register("email", {
                            required: "邮件栏位为必填",
                        })}
                        placeholder="e.g johndoe@gmail.com"
                        className="border border-transparent border-b-gray-300 py-2 outline-none"
                        onBlur={(e) => trigger(e.target.name)}
                    />
                    {errors.email && (
                        <p className="mt-1 text-red-500">
                            {errors.email.message}
                        </p>
                    )}
                </InputGroup>
                <InputGroup label="配送方式" mb="mb-0">
                    <select
                        className="my-2 border border-gray-300 bg-transparent p-3"
                        {...register("deliveryMethod")}
                    >
                        <option value="自取">自取</option>
                        <option value="外送">外送</option>
                    </select>
                    {deliveryMethod === "外送" && (
                        <InputGroup label="地址" mb="mb-0">
                            <input
                                type="text"
                                placeholder="e.g 420 LORONG KANGSAR 1/7 TAMAN KANGSAR, 大小写均可"
                                className="border border-transparent border-b-gray-300 py-2 outline-none"
                                {...register("address", {
                                    required: "地址栏位为必填",
                                })}
                            />
                            {errors.address && (
                                <p className="mt-1 text-red-500">
                                    {errors.address.message}
                                </p>
                            )}
                        </InputGroup>
                    )}
                </InputGroup>
                {deliveryMethod === "delivery" && (
                    <InputGroup mb="mb-0">
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
            </div>
            <div className="mt-4">
                <h2 className="mb-4 font-bold">备注 (可选)</h2>
                <textarea
                    className="w-full resize-none rounded-md border border-t p-3 outline-none focus:border-secondary"
                    {...register("orderRequest")}
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
