const Input = ({ type, label, register, required, errors }) => {
    const inputStyles =
        "transition-color w-full rounded-lg border border-gray-500 py-2 px-4 text-base outline-none focus:border-primary";

    return (
        <>
            <label htmlFor={label}>{label}</label>
            <input
                type={type}
                className={inputStyles}
                id={label}
                {...register(label, { required: true })}
            />
            {errors[label]?.type === "required" && (
                <p className="mt-1 text-base text-red-600">名为不得为空</p>
            )}
        </>
    );
};

export default Input;
