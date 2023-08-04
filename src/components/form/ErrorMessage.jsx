const ErrorMessage = ({ children }) => {
    return children ? <p className="mt-1 text-red-500">{children}</p> : null;
};

export default ErrorMessage;
