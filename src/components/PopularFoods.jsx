import useFoodMenu from "../hooks/useFoodMenu.js";
import PopularCard from "./PopularCard";
import Line from "./Line";
import { GridCol, SectionPy } from "../styles.js";

const PopularFoods = () => {
    const { data: menu, isLoading } = useFoodMenu();

    if (isLoading) {
        return <p>Loading ...</p>;
    }
    return (
        <section className={`${SectionPy} container`}>
            <div className="mb-6">
                <div className="flex justify-center">
                    <h2 className="border-r border-gray-200 pr-4 text-4xl font-bold text-primary">
                        热门点心
                    </h2>
                </div>
                <Line />
            </div>
            <ul className={`${GridCol}`}>
                {menu.data.map((m) => <PopularCard {...m} />).slice(0, 8)}
            </ul>
        </section>
    );
};
export default PopularFoods;
