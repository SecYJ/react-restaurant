import { getHours, getMinutes } from "date-fns/esm";
import { useFormContext } from "react-hook-form";
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCartCtx } from "../../contexts/CartCtx";
import { useFormDataContext } from "../../contexts/FormCtx";
import useTotalAmount from "../../hooks/useTotalAmount";
import PurchasedTable from "../PurchasedTable";

const Success = () => {
    const { totalAmount, totalUnits, cart } = useCartCtx();
    const { getValues } = useFormContext();
    const { startTime, startDate } = useFormDataContext();

    const username = getValues("username") || "";
    const phone = Number(getValues("phone")) || "";
    const deliveryMethod = getValues("deliveryMethod") || "";
    const address = getValues("address") || "";

    // const userDataMap = [

    // ]

    const { total } = useTotalAmount(totalAmount, deliveryMethod);
    // console.log(startTime);

    return (
        <div className="container py-10">
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
                        <div className="text-gray-500">外送</div>
                    </div>
                    {address && (
                        <div className="grid grid-cols-[100px_1fr] py-4 pl-4 text-lg">
                            <div>地址 :</div>
                            <div className="text-gray-500">{address}</div>
                        </div>
                    )}
                    <div className="grid grid-cols-[100px_1fr] py-4 pl-4 text-lg">
                        <div>日期 :</div>
                        <div>{new Intl.DateTimeFormat().format(startDate)}</div>
                    </div>
                    <div className="grid grid-cols-[100px_1fr] py-4 pl-4 text-lg">
                        <div>时间:</div>
                        <div>
                            {getHours(startTime)}.
                            {getMinutes(startTime) || "00"}
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
        </div>
    );

    // return (
    //     <div className="grid place-items-center">
    //         <div className="w-full max-w-xl rounded-sm border border-gray-200 bg-gray-100 p-8 shadow-lg">
    //             <div className="mx-auto mb-10 grid justify-items-center gap-2">
    //                 <div className="rounded-full bg-green-400 p-4">
    //                     <AiOutlineCheck color="white" />
    //                 </div>
    //                 <h1 className="text-3xl font-medium text-green-400">
    //                     付款成功
    //                 </h1>
    //             </div>
    //             <div className="space-y-4">
    //                 <div>
    //                     <p>名称:</p>
    //                     <p>{username}</p>
    //                 </div>
    //                 <div>
    //                     <p>手机号码:</p>
    //                     <p>{phone}</p>
    //                 </div>
    //                 <div>
    //                     <p>配送方式:</p>
    //                     <p>{deliveryMethod}</p>
    //                 </div>
    //                 {address && (
    //                     <div>
    //                         <p>地址:</p>
    //                         {address}
    //                     </div>
    //                 )}
    //                 <div>
    //                     <p>日期:</p>
    //                     <p>{new Intl.DateTimeFormat().format(startDate)}</p>
    //                 </div>
    //                 <div>
    //                     <p>时间:</p>
    //                     <p>
    //                         {getHours(startTime)}.
    //                         {getMinutes(startTime) || "00"}
    //                     </p>
    //                 </div>
    //                 <div>
    //                     <p>总额:</p>
    //                     <p>RM {total}</p>
    //                 </div>
    //             </div>
    //             <div className="flex justify-center">
    //                 <button type="button" onClick={() => {}}>
    //                     继续购物
    //                 </button>
    //                 <Link to="/">回到首页</Link>
    //             </div>
    //         </div>
    //     </div>
    // );
};

export default Success;
