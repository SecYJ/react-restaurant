import React from "react";
import CartItem from "../components/cart/CartItem";
import { useCartCtx } from "../contexts/CartCtx";

const DeliveryInfo = () => {
    const { cart } = useCartCtx();

    return (
        <div className="grid grid-cols-2 gap-8">
            <ul>
                {cart.map((c) => (
                    <CartItem key={c.id} />
                ))}
            </ul>
        </div>
    );
};

export default DeliveryInfo;
