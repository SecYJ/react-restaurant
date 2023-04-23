import useFoodMenu from "../hooks/useFoodMenu.js";
import PopularItem from "./PopularItem";
import Line from "./Line";
import { GridCol, SectionPy } from "../styles.js";

const Populars = () => {
    const { data, isLoading } = useFoodMenu();

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
                    <h2 className="pl-4 text-4xl font-bold text-secondary/80">
                        Delicious
                    </h2>
                </div>
                <Line />
            </div>
            <ul className={`${GridCol}`}>
                {data.data
                    .map((item, index) => {
                        return (
                            <PopularItem key={index} {...item} index={index} />
                        );
                    })
                    .slice(0, 8)}
            </ul>
        </section>
    );
};
export default Populars;
