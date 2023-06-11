import CartBottom from "./CartBottom";
import CartRow from "./CartRow";
import CartTop from "./CartTop";

const CartList = () => {
    return (
        <>
            <table className="table w-full text-center">
                <CartTop />
                <CartRow />
            </table>
            <CartBottom />
        </>
    );
};

export default CartList;
