import { Link } from "react-router-dom";
import EmptyCartImg from "../assets/emptyCart.jpg";

const EmptyCart = () => {
    return (
        <div className="grid h-full content-center justify-items-center gap-4">
            <img
                src={EmptyCartImg}
                alt="Empty cart"
                className="h-[200px] md:h-[300px] lg:h-[400px]"
            />
            <h1 className="md:3xl lg:4xl text-center text-2xl italic">
                购物车目前还没有餐点
            </h1>
            <Link type="button" to="/menu" className="btn-primary btn">
                前往点心列表
            </Link>
        </div>
    );
};

export default EmptyCart;
