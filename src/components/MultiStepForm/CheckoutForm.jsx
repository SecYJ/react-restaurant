import { useId } from "react";
import { useForm } from "react-hook-form";
// import Input from "../Input";

const CheckoutForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const nameId = useId();
    const emailId = useId();
    const phoneId = useId();

    const inputStyles =
        "transition-color w-full rounded-lg border border-gray-500 py-2 px-4 text-base outline-none focus:border-primary";

    const submit = (e) => {
        e.preventDefault();
        console.log(e);
    };

    console.log(errors);

    return (
        <div>
            <h1>客户资料</h1>
            <form
                className="mt-8 grid grid-cols-2 gap-10"
                onSubmit={handleSubmit(submit)}
            >
                <div className="relative">
                    <div className="mt-8" />
                    {/* <Input label="名称" register={register} errors={errors} /> */}
                    <label htmlFor={nameId} className="text-lg">
                        名称
                    </label>
                    <input
                        type="text"
                        {...register("名称", { required: true, maxLength: 20 })}
                        className={inputStyles}
                        id={nameId}
                        placeholder="hello"
                    />
                </div>
                {/* <div className="relative">
                    <div className="mt-8" />
                    <label htmlFor={phoneId} className="text-lg">
                        联络号码
                    </label>
                    <input
                        type="number"
                        {...register("联络号码", {
                            required: true,
                            valueAsNumber: true,
                           
                        })}
                        className={inputStyles}
                        id={phoneId}
                        placeholder="hello"
                    />
                </div>
                <div className="relative">
                    <div className="mt-8" />
                    <label htmlFor={emailId} className="text-lg">
                        Email
                    </label>
                    <input
                        type="email"
                        {...register("email", {
                            required: true,
                        })}
                        className={inputStyles}
                        id={emailId}
                        placeholder="hello"
                    />
                </div> */}
            </form>
        </div>
    );
};

export default CheckoutForm;
