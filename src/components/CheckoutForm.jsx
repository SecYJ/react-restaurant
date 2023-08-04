import { useState } from "react";
import FormFields from "./form/FormFields";
import Subtotal from "./Subtotal";
import PaymentSuccess from "./PaymentSuccess";
import SectionContainer from "./SectionContainer";

const CheckoutForm = () => {
    const [step, setStep] = useState("checkout");

    return (
        <SectionContainer>
            {step === "checkout" && (
                <div className="mx-auto grid w-full max-w-5xl gap-8 px-3 lg:grid-cols-[1fr_300px]">
                    <h1 className="col-span-full text-3xl font-bold">
                        个人与付款信息
                    </h1>
                    <FormFields />
                    <div className="mt-4 lg:mt-0">
                        <Subtotal onNextStepChange={() => setStep("success")} />
                    </div>
                </div>
            )}
            {step === "success" && <PaymentSuccess />}
        </SectionContainer>
    );
};

export default CheckoutForm;
