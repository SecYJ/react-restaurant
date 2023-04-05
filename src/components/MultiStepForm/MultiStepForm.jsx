import { useState } from "react";
import { useCartCtx } from "../../contexts/CartCtx";
import CartItem from "../cart/CartItem";
import DetailsForm from "./DetailsForm";
import FormCartTotal from "./FormCartTotal";
import MultiStepNav from "./MultiStepNav";
import PaymentForm from "./PaymentForm";
import Success from "./Success";

const MultiStepForm = () => {
    const { cart } = useCartCtx();
    const [step, setStep] = useState(1);

    return (
        <div className="container my-20">
            <MultiStepNav />
            <div
                className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-8"
                // <div className="mt-20 grid grid-cols-[1fr_25%] gap-8"
            >
                <div className="relative max-h-[700px] overflow-auto pr-3 [scrollbar-width:thin]">
                    <ul className="">
                        {cart.map((c) => (
                            <CartItem key={c.id} {...c} />
                        ))}
                    </ul>
                    {cart.length > 0 && <FormCartTotal />}
                </div>
                {step === 1 ? (
                    <DetailsForm onNextClick={setStep} />
                ) : step === 2 ? (
                    <PaymentForm />
                ) : (
                    <Success />
                )}
            </div>
        </div>
    );
};

export default MultiStepForm;
