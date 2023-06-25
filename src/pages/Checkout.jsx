import CheckoutForm from "../components/CheckoutForm";
import FormCtx from "../contexts/FormCtx";
import PaymentCtx from "../contexts/PaymentCtx";

const Checkout = () => {
    return (
        <FormCtx>
            <PaymentCtx>
                <CheckoutForm />
            </PaymentCtx>
        </FormCtx>
    );
};

export default Checkout;
