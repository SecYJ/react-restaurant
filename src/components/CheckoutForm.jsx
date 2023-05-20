import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FormFields from "./FormFields";
import Subtotal from "./Subtotal";
import Success from "./MultiStepForm/Success";

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
        <AnimatePresence
            variants={variants}
            initial="enter"
            animate="animate"
            exit="exit"
        >
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
            {step === "success" && <Success />}
        </AnimatePresence>
    );
};

export default CheckoutForm;
