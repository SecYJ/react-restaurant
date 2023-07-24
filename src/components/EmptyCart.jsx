import { Link } from "react-router-dom";
import EmptyCartImg from "../assets/emptyCart.jpg";

const EmptyCart = () => {
    return (
        <div className="grid h-full content-center justify-items-center gap-4">
            <img
                src={EmptyCartImg}
                alt="Empty cart"
                className="md:h-w-[400px] h-[200px] w-[200px] md:h-[400px] md:w-[400px] lg:h-auto lg:w-auto"
            />
            <h1 className="text-center text-xl italic">购物车目前还没有餐点</h1>
            <Link type="button" to="/menu" className="btn-primary btn">
                前往点心列表
            </Link>
        </div>
    );
};

export default EmptyCart;
