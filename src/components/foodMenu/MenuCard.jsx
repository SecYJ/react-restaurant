import { useCartCtx } from "../../contexts/CartCtx";
import { AiOutlinePlus } from "react-icons/ai";
import useMediaQuery from "../../hooks/useMediaQuery";
import Button from "../Button";
import LazyImage from "../LazyImage";

const MenuCard = ({ menuData }) => {
    const { img, category, price, name, stock, id } = menuData;
    const { dispatch } = useCartCtx();
    const [cName, ...eName] = name.split(" ");
    const matchMedia = useMediaQuery("(min-width: 1024px)");

    const addToCart = () => {
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
    };

    return (
        <li className="relative grid grid-cols-[auto_1fr] overflow-hidden rounded-lg border border-gray-200 duration-150 hover:-translate-y-1 hover:border-gray-400 hover:shadow-xl lg:grid-cols-1 lg:grid-rows-[auto_1fr]">
            <div className="w-24 overflow-hidden lg:w-auto">
                <LazyImage src={img} alt={name} />
            </div>
            <div className="grid grid-cols-[1fr_auto] content-between p-2">
                {matchMedia ? (
                    <>
                        <p className="flex items-center font-semibold">
                            {cName}
                            <span className="badge-secondary badge ml-2">
                                {category}
                            </span>
                        </p>
                        <strong className="text-3xl text-primary">
                            RM {price.toFixed(2)}
                        </strong>
                        <p className="text-lg font-semibold">
                            {eName.join(" ")}
                        </p>
                    </>
                ) : (
                    <>
                        <p className="col-span-full">{name}</p>
                        <span className="badge-secondary badge col-span-full">
                            {category}
                        </span>
                        <strong className="text-primary">
                            RM {price.toFixed(2)}
                        </strong>
                    </>
                )}
                {matchMedia ? (
                    <Button
                        color="secondary"
                        className="btn-lg col-span-full mt-3"
                        onClick={addToCart}
                    >
                        加入购物车
                    </Button>
                ) : (
                    <button
                        type="button"
                        className="grid h-6 w-6 place-items-center self-end rounded-full border border-primary bg-primary"
                        onClick={addToCart}
                    >
                        <AiOutlinePlus color="white" />
                    </button>
                )}
            </div>
        </li>
    );
};
export default MenuCard;
