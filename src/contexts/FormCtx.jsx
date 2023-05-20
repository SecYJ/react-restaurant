import { createContext, useContext, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const FormDataContext = createContext(null);

const FormCtx = ({ children }) => {
    const [startDate, setStartDate] = useState("");
    const [startTime, setStartTime] = useState("");

    const methods = useForm({
        mode: "onChange",
        defaultValues: {
            username: "",
            phone: "",
            deliveryMethod: "外送",
            contactLessDelivery: false,
            paymentRadio: "",
            orderRequest: "",
            email: "",
            address: "",
            eWallet: "",
        },
    });

    return (
        <FormDataContext.Provider
            value={{
                startDate,
                startTime,
                setStartDate,
                setStartTime,
            }}
        >
            <FormProvider {...methods}>{children}</FormProvider>
        </FormDataContext.Provider>
    );
};

export const useFormDataContext = () => useContext(FormDataContext);

export default FormCtx;
