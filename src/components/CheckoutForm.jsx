import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import FormFields from "./FormFields";
import Subtotal from "./Subtotal";
import PaymentCtx from "../contexts/PaymentCtx";
import PaymentSuccess from "./PaymentSuccess";

const variants = {
    enter: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
};

const CheckoutForm = () => {
    const [step, setStep] = useState("checkout");

    return (
        // <AnimatePresence
        //     variants={variants}
        //     initial="enter"
        //     animate="animate"
        //     exit="exit"
        // >

        // </AnimatePresence>
        // MIGHT BE REVERT LATER
        <PaymentCtx>
            {step === "checkout" && (
                <div className="mx-auto grid w-full max-w-5xl gap-8 py-20 px-3 lg:grid-cols-[1fr_300px]">
                    <h1 className="col-span-full text-3xl font-bold">
                        Checkout
                    </h1>
                    <FormFields />
                    <div className="mt-4 lg:mt-0">
                        <Subtotal onNextStepChange={() => setStep("success")} />
                    </div>
                </div>
            )}
            {step === "success" && <PaymentSuccess />}
        </PaymentCtx>
    );
};

export default CheckoutForm;
