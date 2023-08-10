import { createContext, useContext, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { paymentSchema } from "../lib/validations/payment";

const FormDataContext = createContext(null);

const FormCtx = ({ children }) => {
    const [deliveryDate, setDeliveryDate] = useState("");
    const [businessHours, setBusinessHours] = useState("");

    const methods = useForm({
        mode: "onChange",
        defaultValues: {
            username: "",
            phone: "",
            deliveryMethod: "外卖",
            contactLessDelivery: false,
            paymentMethod: "",
            orderRequest: "",
            email: "",
            address: "",
            eWallet: "GrabPay",
        },
        resolver: yupResolver(paymentSchema),
    });

    return (
        <FormDataContext.Provider
            value={{
                deliveryDate,
                setDeliveryDate,
                businessHours,
                setBusinessHours,
            }}
        >
            <FormProvider {...methods}>{children}</FormProvider>
        </FormDataContext.Provider>
    );
};

export const useFormDataContext = () => useContext(FormDataContext);

export default FormCtx;
