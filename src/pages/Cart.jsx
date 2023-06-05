import EmptyCart from "../components/EmptyCart";
import OrderSummary from "../components/OrderSummary/OrderSummary";
import { useCartCtx } from "../contexts/CartCtx";

const Cart = () => {
    const { cart } = useCartCtx();

    if (cart.length < 1) {
        return <EmptyCart />;
    }

    return (
        <div className="container flex flex-col justify-between py-6 lg:py-10">
            <OrderSummary />
        </div>
    );
};

export default Cart;
