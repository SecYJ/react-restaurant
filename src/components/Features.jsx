import Line from "./Line";
import { heading } from "../helpers/ui";
import features from "../constants/features";
import { GridCol, SectionPy } from "../styles";

const Features = () => {
    return (
        <section className={`${SectionPy} container`}>
            <h2 className={heading}>我们的特点</h2>
            <Line />
            <ul className={`${GridCol} mx-auto mt-4 md:mt-6 lg:mt-8`}>
                {features.map((feature) => {
                    const { icon, title, text } = feature;

                    return (
                        <li
                            className="card-bordered card border-gray-300 shadow-xl"
                            key={title}
                        >
                            <div className="card-body gap-6">
                                <div className="flex items-center gap-8 text-2xl">
                                    <div className="text-secondary">{icon}</div>
                                    <h3 className="text-center font-semibold text-primary">
                                        {title}
                                    </h3>
                                </div>
                                <p>{text}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};
export default Features;
