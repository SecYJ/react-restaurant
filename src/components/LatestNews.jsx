import { SectionPy } from "../styles";
import Line from "./Line";
import repair from "../assets/new-repair.jpg";
import price from "../assets/new-price.jpg";
import price2 from "../assets/new-price-2.jpg";
import cny from "../assets/new-new-year.jpg";

const data = [repair, price, price2, cny];

const LatestNews = () => {
    return (
        <section className={`${SectionPy} container`}>
            <div className="flex justify-center">
                <h2 className="border-r border-gray-200 pr-4 text-4xl font-bold text-primary">
                    最新消息
                </h2>
            </div>
            <Line />
            <ul className="my-4 md:my-6 lg:my-8">
                {data.map((img, index) => (
                    <li key={index}>
                        <img src={img} />
                    </li>
                ))}
            </ul>
            <div className="flex justify-center">
                <button
                    type="button"
                    className="text-secondary hover:text-primary"
                >
                    - MORE NEWS -
                </button>
            </div>
        </section>
    );
};
export default LatestNews;
