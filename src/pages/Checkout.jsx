import DetailsForm from "../components/MultiStepForm/DetailsForm";
import MultiStepForm from "../components/MultiStepForm/MultiStepForm";
import OrderSummary from "../components/OrderSummary/OrderSummary";
import { useCartCtx } from "../contexts/CartCtx";
import { IoIosCheckmark } from "react-icons/io";
import Subtotal from "../components/Subtotal";
import CheckoutForm from "../components/CheckoutForm";
import FormCtx from "../contexts/FormCtx";

const Checkout = () => {
    const { cart } = useCartCtx();
    const linkStyles = "text-primary text-base";

    // if (cart.length < 1) {
    //     return (
    //         <div className="grid place-items-center">
    //             <div className="text-lg">
    //                 <p>当前购物车为空, 继续浏览 - </p>
    //                 <div className="mt-2 flex gap-2">
    //                     <Link to="/" className={linkStyles}>
    //                         首页
    //                     </Link>
    //                     <Link to="/menu" className={linkStyles}>
    //                         菜单
    //                     </Link>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }

    // return <MultiStepForm />;

    return (
        <FormCtx>
            {/* <div className="mx-auto grid w-full max-w-5xl gap-8 py-20 px-3 lg:grid-cols-[1fr_300px]">
                <h1 className="col-span-full text-3xl font-bold">Checkout</h1>
                <div className="mt-4 lg:mt-0">
                <Subtotal />
                </div>
            </div> */}
            <CheckoutForm />
        </FormCtx>
    );
};

export default Checkout;
