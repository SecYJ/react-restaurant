import RequiredInput from "./form/RequiredInput";

const InputGroup = ({ children, label, mb = "mb-4", required }) => {
    return (
        <div className={`${mb} flex flex-col`}>
            {label && (
                <label className="text-sm text-gray-400">
                    {label}
                    {required && <RequiredInput />}
                </label>
            )}
            {children}
        </div>
    );
};

export default InputGroup;
