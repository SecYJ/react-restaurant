const PaymentSuccessTextRow = ({ className, children }) => {
    return (
        <div
            className={`grid grid-cols-[100px_1fr] py-4 pl-4 text-lg ${className}`}
        >
            {children}
        </div>
    );
};

export default PaymentSuccessTextRow;
