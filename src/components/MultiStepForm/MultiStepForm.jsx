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
    const [step, setStep] = useState(1);

    return (
        <div className="container my-20">
            <MultiStepNav />
            <div
                className="mx-auto mt-20"
                // <div className="mt-20 grid grid-cols-[1fr_25%] gap-8"
            >
                <OrderOverviewTable />
                {/* <div className="relative max-h-[700px] overflow-auto pr-3 [scrollbar-width:thin]">

                    {cart.length > 0 && <FormCartTotal />}
                </div> */}
            </div>
        </div>
    );
};

export default MultiStepForm;
