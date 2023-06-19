import { createContext, useContext, useState } from "react";

const PaymentContext = createContext();

const PaymentCtx = ({ children }) => {
    const [paymentData, setPaymentData] = useState({
        cart: [],
        username: "",
        phone: "",
        deliveryMethod: "",
        address: "",
        contactLessDelivery: false,
        eWallet: "",
        email: "",
        orderRequest: "",
        total: 0,
        totalUnits: 0,
        totalAmount: 0,
    });

    return (
        <PaymentContext.Provider value={{ paymentData, setPaymentData }}>
            {children}
        </PaymentContext.Provider>
    );
};

export const usePaymentCtx = () => useContext(PaymentContext);

export default PaymentCtx;
