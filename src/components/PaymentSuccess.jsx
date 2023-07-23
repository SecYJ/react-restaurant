import { useEffect } from "react";
import { getHours, getMinutes } from "date-fns/esm";
import CarouselSlider from "./CarouselSlider";
import PurchasedTable from "./PurchasedTable";
import { usePaymentCtx } from "../contexts/PaymentCtx";
import { useCartCtx } from "../contexts/CartCtx";
import randomData from "../services/randomData";
import { useMenuCtx } from "../contexts/MenuCtx";
import SectionContainer from "./SectionContainer";
import PaymentSuccessTextRow from "./PaymentSuccessTextRow";

const paymentMap = {
    onlineBanking: "网络银行",
    creditCard: "信用卡",
    eWallet: "电子钱包",
    cashOnDelivery: "货到付款",
};

const PaymentSuccess = () => {
    const { paymentData } = usePaymentCtx();
    const { clearCart } = useCartCtx();
    const {
        total,
        username,
        phone,
        deliveryMethod,
        address,
        businessHours,
        deliveryDate,
        cart,
        email,
        paymentMethod,
        contactLessDelivery,
    } = paymentData;

    const { menu } = useMenuCtx();
    const cartIds = cart.map((item) => item.id);
    const data = randomData(menu, [...new Set(cartIds)]);

    useEffect(() => {
        clearCart();
    }, []);

    return (
        <SectionContainer>
            <section className="mb-10">
                <h1 className="mb-4 text-center text-3xl">
                    付款成功! 马上为您安排 😀
                </h1>
                <h2 className="mb-3 text-2xl">您的资讯</h2>
                <div className="divide-y divide-gray-300">
                    <PaymentSuccessTextRow>
                        <div>名称 :</div>
                        <div className="text-gray-500">{username}</div>
                    </PaymentSuccessTextRow>
                    <PaymentSuccessTextRow>
                        <div>手机号码 :</div>
                        <div className="text-gray-500">
                            {phone.startsWith("0")
                                ? `(+60) ${phone.slice(1)}`
                                : `(+60) ${phone}`}
                        </div>
                    </PaymentSuccessTextRow>
                    <PaymentSuccessTextRow>
                        <div>配送方式 :</div>
                        <div className="text-gray-500">
                            {`${deliveryMethod} ${
                                contactLessDelivery ? "(无接触外送)" : ""
                            }`}
                        </div>
                    </PaymentSuccessTextRow>
                    <PaymentSuccessTextRow>
                        <div>Email :</div>
                        <div className="text-gray-500">{email}</div>
                    </PaymentSuccessTextRow>
                    {address && (
                        <PaymentSuccessTextRow>
                            <div>地址 :</div>
                            <div className="text-gray-500">{address}</div>
                        </PaymentSuccessTextRow>
                    )}
                    <PaymentSuccessTextRow>
                        <div>付款方式 :</div>
                        <div>{paymentMap[paymentMethod]}</div>
                    </PaymentSuccessTextRow>
                    <PaymentSuccessTextRow>
                        <div>日期 :</div>
                        <div>
                            {new Intl.DateTimeFormat().format(deliveryDate)}
                        </div>
                    </PaymentSuccessTextRow>
                    <PaymentSuccessTextRow>
                        <div>时间:</div>
                        <div>
                            {getHours(businessHours)}.
                            {getMinutes(businessHours) || "00"}{" "}
                            {getHours(businessHours) >= 12 ? "pm" : "am"}
                        </div>
                    </PaymentSuccessTextRow>
                    <PaymentSuccessTextRow>
                        <p>总额 :</p>
                        <p>RM {total}</p>
                    </PaymentSuccessTextRow>
                </div>
            </section>
            <section className="overflow-x-auto">
                <h2 className="mb-3 text-2xl">购买内容</h2>
                <PurchasedTable />
            </section>
            <section className="mt-8">
                <h2 className="mb-3 text-2xl">您可能喜欢</h2>
                <CarouselSlider carouselData={data} />
            </section>
        </SectionContainer>
    );
};

export default PaymentSuccess;
