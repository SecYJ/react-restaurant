import { useAuth0 } from "@auth0/auth0-react";
import { useCartCtx } from "../../contexts/CartCtx";
import Button from "../Button";

const MenuCard = ({ img, category, imgFallback, price, name, stock, id }) => {
    const { user } = useAuth0();
    const { dispatch } = useCartCtx();
    const [cName, ...eName] = name.split(" ");

    // const saveToLocalStorage = () => {
    //     const username = user?.name ?? "Anonymous"

    //         const t = JSON.parse(localStorage.getItem("cart"));

    //     const userCart = {
    //         username: ,
    //         cartItem: [...JSON.parse(localStorage.getItem("cart"))],
    //     };
    //     localStorage.setItem("cart", JSON.stringify(userCart));
    // };

    return (
        <li className="relative grid grid-rows-[auto_1fr] overflow-hidden rounded-lg border border-gray-200 duration-150 hover:-translate-y-1 hover:border-gray-400 hover:shadow-xl">
            <img src={img} alt={name} className="h-80 w-full object-cover" />
            <div className="grid grid-cols-[1fr_auto] p-3">
                <p className="flex items-center font-semibold">
                    {cName}
                    <span className="badge-secondary badge ml-2">
                        {category}
                    </span>
                </p>
                <strong className="text-3xl text-primary">$ {price}</strong>
                <p className="text-lg font-semibold">{eName.join(" ")}</p>
                <Button
                    color="secondary"
                    className="btn-lg col-span-full mt-3"
                    onClick={() => {
                        // saveToLocalStorage();
                        dispatch({
                            type: "ADD_TO_CART",
                            payload: {
                                imgFallback,
                                price,
                                name,
                                id,
                                stock,
                            },
                        });
                    }}
                >
                    加入购物车
                </Button>
            </div>
        </li>
    );
};
export default MenuCard;

/*
    username,
    isAuthenticated,
    cartItems: []

    My logic working flow
    1. When user click button add item to cart, also check for the is same user, if same add to the same user;

*/
