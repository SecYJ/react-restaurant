import EmptyCart from "../components/EmptyCart";
import CartList from "../components/cart/CartList";
import { useCartCtx } from "../contexts/CartCtx";
import SectionContainer from "../components/SectionContainer";

const Cart = () => {
    const { cart } = useCartCtx();

    if (cart.length < 1) {
        return <EmptyCart />;
    }

    return (
        <SectionContainer className="container flex flex-col justify-between py-6 lg:py-10">
            <h1 className="mb-4 text-center text-4xl lg:mb-8">购物车</h1>
            <CartList />
        </SectionContainer>
    );
};

export default Cart;
