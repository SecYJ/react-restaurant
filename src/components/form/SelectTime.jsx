import { useFormDataContext } from "../../contexts/FormCtx";
import {
    addDays,
    differenceInMinutes,
    getDay,
    getHours,
    getMinutes,
    isSameDay,
    isToday,
} from "date-fns/esm";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SelectTime = () => {
    const { deliveryDate, setDeliveryDate, businessHours, setBusinessHours } =
        useFormDataContext();

    const filterOperationDay = (date) => {
        const today = isToday(date);
        const currentHour = getHours(new Date());

        return (getDay(date) !== 1 && !today) || (today && currentHour <= 13);
    };

    const filterTime = (date) => {
        const hour = getHours(date);
        const minuteDifference = differenceInMinutes(date, new Date()) >= 30; // greater or equal 30m can booking
        const isToday = isSameDay(deliveryDate, new Date());
        const morningBookingHour = hour >= 6 && hour <= 12;
        const afternoonBookingHour = hour === 13 && getMinutes(date) !== 30;

        return isToday
            ? (minuteDifference && morningBookingHour) ||
                  (minuteDifference && afternoonBookingHour)
            : deliveryDate === ""
            ? false
            : morningBookingHour || afternoonBookingHour;
    };

    const onDateChange = (date) => {
        setDeliveryDate(date);
        setBusinessHours("");
    };

    return (
        <>
            <DatePicker
                className="rounded-sm border border-gray-300 outline-none focus:border-primary"
                filterDate={filterOperationDay}
                selected={deliveryDate}
                onChange={onDateChange}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                maxDate={addDays(new Date(), 7)}
                placeholderText="请选择日期"
                shouldCloseOnSelect={false}
            />
            <DatePicker
                disabled={!deliveryDate}
                showTimeSelect
                showTimeSelectOnly
                onChange={(date) => setBusinessHours(date)}
                filterTime={filterTime}
                className={`rounded-sm border border-gray-300 outline-none focus:border-primary ${
                    !deliveryDate ? "cursor-not-allowed" : ""
                }`}
                dateFormat="h:mm aa"
                placeholderText="请选择时间"
                shouldCloseOnSelect={false}
                selected={businessHours}
            />
        </>
    );
};

export default SelectTime;
