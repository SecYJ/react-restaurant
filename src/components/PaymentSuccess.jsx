import { useEffect } from "react";
import { getHours, getMinutes } from "date-fns/esm";
import CarouselSlider from "./CarouselSlider";
import PurchasedTable from "./PurchasedTable";
import { usePaymentCtx } from "../contexts/PaymentCtx";
import { useCartCtx } from "../contexts/CartCtx";
import randomData from "../services/randomData";
import { useMenuCtx } from "../contexts/MenuCtx";
import SectionContainer from "./SectionContainer";

const PaymentSuccess = () => {
    const { paymentData } = usePaymentCtx();
    const { clearCart } = useCartCtx();
    const {
        total,
        username,
        phone,
        deliveryMethod,
        address,
        startTime,
        startDate,
        cart,
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
                <h1 className="mb-4 text-center text-3xl">订单内容</h1>
                <h2 className="mb-3 text-2xl">您的资讯</h2>
                <div className="divide-y divide-gray-300">
                    <div className="grid grid-cols-[100px_1fr] py-4 pl-4 text-lg">
                        <div>名称 :</div>
                        <div className="text-gray-500">{username}</div>
                    </div>
                    <div className="grid grid-cols-[100px_1fr] py-4 pl-4 text-lg">
                        <div>手机号码 :</div>
                        <div className="text-gray-500">{phone}</div>
                    </div>
                    <div className="grid grid-cols-[100px_1fr] py-4 pl-4 text-lg">
                        <div>配送方式 :</div>
                        <div className="text-gray-500">{deliveryMethod}</div>
                    </div>
                    {address && (
                        <div className="grid grid-cols-[100px_1fr] py-4 pl-4 text-lg">
                            <div>地址 :</div>
                            <div className="text-gray-500">{address}</div>
                        </div>
                    )}
                    <div className="grid grid-cols-[100px_1fr] py-4 pl-4 text-lg">
                        <div>日期 :</div>
                        <div>
                            {new Intl.DateTimeFormat().format(startDate)}{" "}
                        </div>
                    </div>
                    <div className="grid grid-cols-[100px_1fr] py-4 pl-4 text-lg">
                        <div>时间:</div>
                        <div>
                            {getHours(startTime)}.
                            {getMinutes(startTime) || "00"}{" "}
                            {getHours(startTime) >= 12 ? "pm" : "am"}
                        </div>
                    </div>
                    <div className="grid grid-cols-[100px_1fr] py-4 pl-4 text-lg">
                        <p>总额 :</p>
                        <p>RM {total}</p>
                    </div>
                </div>
            </section>
            <section className="overflow-x-auto">
                <h2 className="mb-3 text-2xl">购买内容</h2>
                <PurchasedTable />
            </section>
            <section className="mt-4">
                <CarouselSlider carouselData={data} />
            </section>
        </SectionContainer>
    );
};

export default PaymentSuccess;
