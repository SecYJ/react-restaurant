const paymentSteps = ["确认订单", "建立订单", "完成订单"];

export const successIcon = (
    <svg
        aria-hidden="true"
        className="h-4 w-4 sm:h-5 sm:w-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
        ></path>
    </svg>
);

export default paymentSteps;
