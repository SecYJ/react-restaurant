import { useCartCtx } from "../../contexts/CartCtx";
import Button from "../Button";

const ProductCard = ({
    img,
    category,
    imgFallback,
    price,
    name,
    stock,
    id,
}) => {
    // const { dispatch } = useCartCtx();
    const [cName, ...eName] = name.split(" ");

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
                        // dispatch({
                        //     type: "ADD_TO_CART",
                        //     payload: {
                        //         imgFallback,
                        //         price,
                        //         name,
                        //         id,
                        //         stock,
                        //     },
                        // });
                    }}
                >
                    加入购物车
                </Button>
            </div>
        </li>
    );
};
export default ProductCard;
