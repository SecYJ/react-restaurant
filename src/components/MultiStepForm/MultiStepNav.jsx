import paymentSteps, { successIcon } from "../../constants/paymentStep";

const MultipleStepNav = ({ step }) => {
    return (
        <ol className="flex w-full items-center text-center text-sm font-medium text-gray-500 sm:text-base">
            {paymentSteps.map((p, index) => {
                const completedStep =
                    step >= index + 1 ? successIcon : index + 1;

                if (index + 1 === paymentSteps.length) {
                    return (
                        <li
                            className={`${
                                step >= index + 1 ? "text-primary" : ""
                            } flex items-center whitespace-nowrap`}
                            key={p}
                        >
                            <span className="mr-2">{completedStep}</span>
                            完成订单
                        </li>
                    );
                }

                return (
                    <li
                        className={`${
                            step >= index + 1 ? "text-primary" : ""
                        } after:border-1 flex items-center after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10`}
                        key={p}
                    >
                        <div className="flex items-center gap-2 whitespace-nowrap after:mx-2 after:text-gray-200  after:content-['/'] sm:after:hidden">
                            <span>{completedStep}</span>
                            <span>{p}</span>
                        </div>
                    </li>
                );
            })}
        </ol>
    );

    // return (
    //     <div className="relative mx-auto h-1 max-w-4xl bg-gray-300">
    //         <div
    //             className="absolute top-0 left-0 h-1 bg-primary transition-all"
    //             style={{
    //                 width: Math.floor((100 / 3) * step) + "%",
    //             }}
    //         />

    //         <ul className="flex -translate-y-1/4 justify-between">
    //             <li className="grid -translate-x-1/2 justify-items-center">
    //                 <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-white">
    //                     {stepOneSvg}
    //                 </div>
    //                 <p>确认订单</p>
    //             </li>
    //             <li className="grid justify-items-center">
    //                 <div
    //                     className={`${
    //                         step >= 1 ? "bg-primary" : "bg-gray-300"
    //                     } grid h-10 w-10 place-items-center rounded-full text-white`}
    //                 >
    //                     {stepTwoSvg}
    //                 </div>
    //                 <p className="text-gray-600">客户资讯</p>
    //             </li>
    //             <li className="grid justify-items-center">
    //                 <div
    //                     className={`${
    //                         step >= 1 ? "bg-primary" : "bg-gray-300"
    //                     } grid h-10 w-10 place-items-center rounded-full text-white`}
    //                 >
    //                     {stepTwoSvg}
    //                 </div>
    //                 <p className="text-gray-600">付款资讯</p>
    //             </li>
    //             <li className="grid translate-x-1/2 justify-items-center">
    //                 <div
    //                     className={`${
    //                         step >= 2 ? "bg-primary" : "bg-gray-300"
    //                     } grid h-10 w-10 place-items-center rounded-full text-white`}
    //                 >
    //                     {stepThreeSvg}
    //                 </div>
    //                 <p className="text-gray-600">完成订单</p>
    //             </li>
    //         </ul>
    //     </div>
    // );
};

export default MultipleStepNav;
