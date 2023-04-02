import { useCartCtx } from "../../contexts/CartCtx";
import CartItem from "../cart/CartItem";
import CheckoutForm from "./CheckoutForm";
import MultiStepNav from "./MultiStepNav";

const MultiStepForm = () => {
    const { cart } = useCartCtx();

    return (
        <div className="container my-20">
            <MultiStepNav />
            <div className="mt-20 grid grid-cols-[1fr_25%] gap-8">
                <CheckoutForm />
                <ul className="">
                    {cart.map((c) => (
                        <CartItem key={c.id} {...c} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MultiStepForm;
