import { getHours, getMinutes } from "date-fns/esm";
import { useFormContext } from "react-hook-form";
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useFormDataContext } from "../../contexts/FormCtx";

const Success = () => {
    const { getValues } = useFormContext();
    const { startTime, startDate } = useFormDataContext();

    const username = getValues("username") || "";
    const phone = Number(getValues("phone")) || "";
    const deliveryMethod = getValues("deliveryMethod") || "";
    const address = getValues("address") || "";

    return (
        <div className="grid place-items-center">
            <div className="w-full max-w-xl rounded-sm border border-gray-200 bg-gray-100 p-8 shadow-lg">
                <div className="mx-auto mb-10 grid justify-items-center gap-2">
                    <div className="rounded-full bg-green-400 p-4">
                        <AiOutlineCheck color="white" />
                    </div>
                    <h1 className="text-3xl font-medium text-green-400">
                        付款成功
                    </h1>
                </div>
                <div className="space-y-4">
                    <div>
                        <p>名称:</p>
                        <p>{username}</p>
                    </div>
                    <div>
                        <p>手机号码:</p>
                        <p>{phone}</p>
                        {/* <p>asdfadsfadfs124124</p> */}
                    </div>
                    <div>
                        <p>配送方式:</p>
                        <p>{deliveryMethod}</p>
                        {/* <p>asdfadsfasdf</p> */}
                    </div>

                    {address && (
                        <div>
                            <p>地址:</p>
                            <p>asdfasdfasdf</p>
                        </div>
                    )}

                    <div>
                        <p>日期:</p>
                        <p>{new Intl.DateTimeFormat().format(startDate)}</p>
                    </div>
                    <div>
                        <p>时间:</p>
                        <p>
                            {getHours(startTime)}.
                            {getMinutes(startTime) || "00"}
                        </p>
                    </div>
                </div>
                <div className="flex justify-center">
                    {/* <button
                        type="button"
                        outline
                        onClick={() => window.print()}
                    >
                        列印
                    </button> */}
                    <button type="button" onClick={() => {}}>
                        继续购物
                    </button>
                    <Link to="/">回到首页</Link>
                </div>
            </div>
        </div>
    );
};

export default Success;
