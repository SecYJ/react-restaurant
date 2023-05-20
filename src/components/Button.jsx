const Button = ({
    children,
    color = "primary",
    outline = false,
    className = "",
    onClick,
    type = "button",
}) => {
    return (
        <button
            type={type}
            className={`btn-primary text-white hover:bg-primary/90 ${
                outline ? "btn-outline" : ""
            } ${className} btn h-auto min-h-0 py-3`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
