import { useCartCtx } from "../../contexts/CartCtx";
import Button from "../Button";
import LazyImage from "../LazyImage";

const MenuCard = ({ img, category, price, name, stock, id }) => {
    const { dispatch } = useCartCtx();
    const [cName, ...eName] = name.split(" ");

    return (
        <li className="relative grid grid-rows-[auto_1fr] overflow-hidden rounded-lg border border-gray-200 duration-150 hover:-translate-y-1 hover:border-gray-400 hover:shadow-xl">
            <LazyImage src={img} alt={name} />
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
                        dispatch({
                            type: "ADD_TO_CART",
                            payload: {
                                price,
                                name,
                                id,
                                stock,
                                img,
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
