import { stepOneSvg, stepThreeSvg, stepTwoSvg } from "./formStyles";

const MultipleStepNav = () => {
    return (
        <div className="relative mx-auto h-1 max-w-4xl bg-primary/50">
            <ul className="flex -translate-y-1/4 justify-between">
                <li className="grid -translate-x-1/2 justify-items-center">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-white">
                        {stepOneSvg}
                    </div>
                    <p>订单资讯</p>
                </li>
                <li className="grid justify-items-center">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-white">
                        {stepTwoSvg}
                    </div>
                    <p>付款资讯</p>
                </li>
                <li className="grid translate-x-1/2 justify-items-center">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-white">
                        {stepThreeSvg}
                    </div>
                    <p>完成订单</p>
                </li>
            </ul>
        </div>
    );
};

export default MultipleStepNav;
