import { useState } from "react";
import { useCartCtx } from "../../contexts/CartCtx";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import DetailsForm from "./DetailsForm";
import MultiStepNav from "./MultiStepNav";
import Success from "./Success";
import OrderSummary from "../OrderSummary/OrderSummary";
import FormCtx from "../../contexts/FormCtx";

const MultiStepForm = () => {
    const [step, setStep] = useState(1);

    const navigateStep = (orientation) => {
        if (orientation === "next") return setStep(step + 1);
        if (orientation === "prev") return setStep(step - 1);
    };

    return (
        <div className="container my-10">
            <FormCtx>
                <MultiStepNav step={step} />
                <Swiper allowTouchMove={false} className="mt-10">
                    <SwiperSlide>
                        <OrderSummary navigateStep={navigateStep} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <DetailsForm navigateStep={navigateStep} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Success />
                    </SwiperSlide>
                </Swiper>
            </FormCtx>
        </div>
    );
};

export default MultiStepForm;
