import { Link } from "react-router-dom";
import { useCartCtx } from "../../contexts/CartCtx";

const CartFooter = () => {
    const { totalAmount, toggleCart } = useCartCtx();

    return (
        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
                <p>总额</p>
                <p>RM {totalAmount.toFixed(2)}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
                若使用外送服务邮费另计
            </p>
            <div className="mt-6">
                <Link
                    to="/checkout"
                    className="flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary/80"
                    onClick={() => toggleCart(false)}
                >
                    Checkout
                </Link>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <Link
                    type="button"
                    className="text-base text-primary/80 hover:text-primary/60"
                    to="/menu"
                    onClick={() => toggleCart(false)}
                >
                    继续点餐
                    <span aria-hidden="true"> &rarr;</span>
                </Link>
            </div>
        </div>
    );
};

export default CartFooter;
