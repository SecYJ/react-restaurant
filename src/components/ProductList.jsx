import ProductCard from "./ProductCard";
import SkeletonPost from "./skeleton/SkeletonPost";
import { useProductsCtx } from "../contexts/ProductsCtx";
import Cart from "./cart/Cart";
import { useCartCtx } from "../contexts/CartCtx";
import FoodCartButton from "./FoodCartButton";
// import { getProducts } from "../services/api-client.js";
import { AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/api-client";
import useFoodProducts from "../hooks/useFoodProducts";

const ProductList = () => {
    // TODO: fix the filtered_products using redux
    const { currentSelect } = useProductsCtx();
    // const { cartVisible: visible } = useCartCtx();

    // const { isLoading, data: foodsData } = useQuery({
    //     queryKey: ["getProducts"],
    //     queryFn: getProducts,
    //     // onSuccess: ({ data: products }) => {
    //     //     dispatch({ type: "SET_PRODUCTS", payload: products });
    //     // },
    // });

    const { isLoading, data: foodsData } = useFoodProducts();

    if (isLoading) {
        return (
            <ul className="grid grid-cols-3 gap-8">
                {[...Array(12).keys()].map((i) => (
                    <SkeletonPost key={i} />
                ))}
            </ul>
        );
    }

    const filtered_products =
        currentSelect === "全部"
            ? foodsData.data
            : foodsData.data.filter((d) => d.category === currentSelect);

    if (filtered_products.length < 1 && search !== "") {
        return <p>没有符合您寻找的食品，请在查询</p>;
    }

    // if (queryData) {
    //     dispatch({ type: "test", payload: queryData });
    // }

    return (
        <>
            <ul className="grid grid-cols-3 gap-8">
                {filtered_products.map((d) => {
                    return <ProductCard {...d} key={d.id} />;
                })}
                {/* {filtered_products.map((d) => {
                    return <ProductCard {...d} key={d.id} />;
                })} */}
            </ul>
            {/* {!visible && <FoodCartButton />} */}
            {/* <AnimatePresence>{visible && <Cart />}</AnimatePresence> */}
        </>
    );
};

export default ProductList;

// https://fs1.app/videos/juq-219/
