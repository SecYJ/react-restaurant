import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useCartCtx } from "../../contexts/CartCtx";
import Button from "../Button";

const CartBottom = () => {
    const { totalUnits, totalAmount } = useCartCtx();
    const navigate = useNavigate();

    const { isAuthenticated, user, loginWithRedirect } = useAuth0();

    const moveNextStep = () => {
        if (!isAuthenticated || !user) return loginWithRedirect();
        navigate("/checkout");
    };

    return (
        <div className="sticky bottom-0 left-0 mt-8 flex justify-between border-t border-primary bg-white p-4 font-semibold">
            <div>
                <p>餐点份量: {totalUnits}</p>
                <p>总额: RM {totalAmount.toFixed(2)}</p>
            </div>
            <Button className="px-10" onClick={moveNextStep}>
                付款去
            </Button>
        </div>
    );
};

export default CartBottom;
