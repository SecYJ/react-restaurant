import { stepOneSvg, stepThreeSvg, stepTwoSvg } from "./formStyles";

const MultipleStepNav = ({ step }) => {
    return (
        <div className="relative mx-auto h-1 max-w-4xl bg-gray-300">
            <div
                className="absolute top-0 left-0 h-1 bg-primary transition-all"
                style={{
                    width: Math.floor((100 / 2) * step) + "%",
                }}
            />

            <ul className="flex -translate-y-1/4 justify-between">
                <li className="grid -translate-x-1/2 justify-items-center">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-white">
                        {stepOneSvg}
                    </div>
                    <p>订单资讯</p>
                </li>
                <li className="grid justify-items-center">
                    <div
                        className={`${
                            step >= 1 ? "bg-primary" : "bg-gray-300"
                        } grid h-10 w-10 place-items-center rounded-full text-white`}
                    >
                        {stepTwoSvg}
                    </div>
                    <p className="text-gray-600">付款资讯</p>
                </li>
                <li className="grid translate-x-1/2 justify-items-center">
                    <div
                        className={`${
                            step >= 2 ? "bg-primary" : "bg-gray-300"
                        } grid h-10 w-10 place-items-center rounded-full text-white`}
                    >
                        {stepThreeSvg}
                    </div>
                    <p className="text-gray-600">完成订单</p>
                </li>
            </ul>
        </div>
    );
};

export default MultipleStepNav;
