import { useState } from "react";
import { useCartCtx } from "../../contexts/CartCtx";
import { AnimatePresence, motion } from "framer-motion";
import CartItem from "../cart/CartItem";
import DetailsForm from "./DetailsForm";
import FormCartTotal from "./FormCartTotal";
import MultiStepNav from "./MultiStepNav";
import PaymentForm from "./PaymentForm";
import Success from "./Success";
import Test from "./Test";
import OrderOverviewTable from "./OrderOverviewTable";

// TODO: animate using variants
// const form = {};

const MultiStepForm = () => {
    const { cart } = useCartCtx();
    const [step, setStep] = useState(0);

    return (
        <div className="container my-20">
            <MultiStepNav step={step} />
            <motion.div className="mx-auto mt-20">
                {step === 0 ? (
                    <OrderOverviewTable onStepChange={setStep} />
                ) : step === 1 ? (
                    <DetailsForm onStepChange={setStep} />
                ) : (
                    <Success />
                )}
                {/* <div className="relative max-h-[700px] overflow-auto pr-3 [scrollbar-width:thin]">

                    {cart.length > 0 && <FormCartTotal />}
                </div> */}
            </motion.div>
        </div>
    );
};

export default MultiStepForm;
