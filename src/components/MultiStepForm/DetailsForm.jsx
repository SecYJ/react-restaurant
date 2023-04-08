import { useCallback } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";
import { POSTCODE_LISTS } from "../../constants/postcodeStateList";
import { error, inputStyles } from "./formStyles";

const DetailsForm = ({ onNextClick }) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
    } = useForm();

    const watchArea = watch("area");

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

    return (
        <div>
            <h1>客户资料</h1>
            <form
                // className="mt-8 grid grid-cols-2 gap-10"
                className="space-y-8"
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
                    {errors.address && (
                        <p className={error}>{errors.address.message}</p>
                    )}
                </div>
                <div className="">
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
                <div className="">
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

                <Button outline className="w-full">
                    下一步
                </Button>
            </form>
        </div>
    );
};

export default DetailsForm;

/*
    Use a variable to control the transition of horizontal angle.
    const [step, setStep] = useState(0)

    My idea be like = 
    AnimatePrecense start
        component 1
        component 2
        component 3
    AnimatePrecense end


*/
