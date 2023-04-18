import { useState } from "react";
import { useCartCtx } from "../../contexts/CartCtx";
import { motion } from "framer-motion";
import DetailsForm from "./DetailsForm";
import MultiStepNav from "./MultiStepNav";
import PaymentForm from "./PaymentForm";
import Success from "./Success";
import Test from "./Test";
import OrderOverviewTable from "./OrderOverviewTable";

// TODO: animate using variants
// const form = {};

const variants = {
    initial: (direction) => {
        return {
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0,
        };
    },
    animate: {
        x: 0,
        opacity: 1,
    },
    exit: (direction) => {
        return {
            x: direction <= 0 ? "100%" : "-100%",
        };
    },
};

const MultiStepForm = () => {
    const [step, setStep] = useState(0);

    function goToNextStep() {
        setDirection(1);
        setStep(step + 1);
    }

    function goToPreviousStep() {
        setDirection(-1);
        setStep(step - 1);
    }

    return (
        <div className="container my-20">
            <MultiStepNav step={step} />
            <div className="my-20 flex overflow-hidden">
                <motion.div
                    className="flex w-full"
                    variants={variants}
                    {...variants}
                    key={step}
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 200 },
                        opacity: { duration: 0.2 },
                    }}
                >
                    {/* <OrderOverviewTable onStepChange={setStep} step={step} />
                    <DetailsForm onStepChange={setStep} step={step} />
                    <Success /> */}
                    {step === 0 ? (
                        <OrderOverviewTable
                            onStepChange={setStep}
                            goNext={goToNextStep}
                            goPrev={goToPreviousStep}
                            step={step}
                        />
                    ) : step === 1 ? (
                        <DetailsForm
                            onStepChange={setStep}
                            step={step}
                            goNext={goToNextStep}
                            goPrev={goToPreviousStep}
                        />
                    ) : (
                        <Success />
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default MultiStepForm;
