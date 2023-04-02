import ProductCard from "./ProductCard";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import PopularItem from "./PopularItem";
import { heading } from "../helpers/ui";
import Line from "./Line";

import { useModalCtx } from "../contexts/ModalCtx";

const Populars = () => {
    const { data } = useModalCtx();

    return (
        <section className="py-20 px-4">
            <div className="mb-6">
                <div className="flex justify-center">
                    <h2 className="border-r border-gray-200 pr-4 text-4xl font-bold text-primary">
                        热门点心
                    </h2>
                    <h2 className="pl-4 text-4xl font-bold text-secondary/80">
                        Delicious
                    </h2>
                </div>
                <Line />
            </div>
            <ul className="grid grid-cols-4 gap-8">
                {data.map((item, index) => {
                    return <PopularItem key={index} {...item} index={index} />;
                })}
            </ul>
        </section>
    );
};
export default Populars;
