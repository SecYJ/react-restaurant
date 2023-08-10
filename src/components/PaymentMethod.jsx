import PaymentList from "./PaymentList";
import RequiredInput from "./form/RequiredInput";

const PaymentMethod = () => {
    return (
        <div className="mt-4 space-y-4">
            <h2 className="mb-4 font-bold">
                付款方式 <RequiredInput />
            </h2>
            <PaymentList />
        </div>
    );
};

export default PaymentMethod;
