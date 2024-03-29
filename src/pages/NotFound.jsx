import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../assets/404.svg";
import SectionContainer from "../components/SectionContainer";

const NotFound = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        let timer = setTimeout(() => {
            navigate("/");
        }, 6000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        let timer = setInterval(() => {
            setCountdown((prev) => (prev === 0 ? 0 : prev - 1));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="grid h-full content-center">
            <SectionContainer className="flex flex-col items-center space-y-4">
                <img
                    src={Error}
                    className="h-[200px] md:h-[300px] lg:h-[400px]"
                    alt="404 error"
                />
                <h1 className="text-2xl md:text-3xl lg:text-4xl">
                    404错误, 你所寻找的页面不存在
                </h1>
                <div className="text-center text-2xl">
                    <p>你将在{countdown}秒后回到首页</p>
                </div>
            </SectionContainer>
        </div>
    );
};
export default NotFound;
