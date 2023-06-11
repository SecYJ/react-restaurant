import Accordion from "./Accordion";
import accordionData from "../constants/accordionsData";
import { SectionPy } from "../styles";

const Faq = () => {
    return (
        <section className={`${SectionPy} container`}>
            <h2 className="mb-4 border-r border-gray-200 text-4xl font-bold text-primary/70">
                常见问题
            </h2>
            <ul className="space-y-4">
                {accordionData.map((item) => (
                    <Accordion {...item} key={item.title} />
                ))}
            </ul>
        </section>
    );
};
export default Faq;
