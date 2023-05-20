const InputGroup = ({ children, label, mb = "mb-4" }) => {
    return (
        <div className={`${mb} flex flex-col`}>
            {label && <label className="text-sm text-gray-400">{label}</label>}
            {children}
        </div>
    );
};

export default InputGroup;
