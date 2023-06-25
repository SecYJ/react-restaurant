import Accordion from "./Accordion";
import accordionData from "../constants/accordionsData";
import SectionContainer from "./SectionContainer";

const Faq = () => {
    return (
        <SectionContainer>
            <h2 className="mb-8 border-r border-gray-200 text-center text-4xl font-bold text-primary/70">
                常见问题
            </h2>
            <ul className="space-y-4">
                {accordionData.map((item) => (
                    <Accordion {...item} key={item.id} />
                ))}
            </ul>
        </SectionContainer>
    );
};
export default Faq;
