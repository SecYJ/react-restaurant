import CheckoutForm from "../components/CheckoutForm";
import FormCtx from "../contexts/FormCtx";

const Checkout = () => {
    return (
        <FormCtx>
            <CheckoutForm />
        </FormCtx>
    );
};

export default Checkout;
