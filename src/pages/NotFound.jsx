import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

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
        <>
            <p>你将在{countdown}秒后回到首页</p>
            <h1>404 您所在的页面不存在, </h1>
            <Button>回到首页</Button>
        </>
    );
};
export default NotFound;
