import { useInView } from "framer-motion";
import { useRef } from "react";
import features from "../../constants/features";
import useListAnimation from "../../hooks/useListAnimation";
import SectionContainer from "../SectionContainer";
import Feature from "./Feature";

const Features = () => {
    const featureRef = useRef(null);
    const isInView = useInView(featureRef, {
        once: true,
        margin: "50px 0px 0px 0px",
    });
    const scope = useListAnimation(isInView);

    return (
        <SectionContainer>
            <h2 className="text-center text-4xl font-bold text-primary">
                我们的特点
            </h2>
            <div ref={featureRef}>
                <ul
                    className="mx-auto mt-4 grid grid-cols-1 gap-4 md:mt-6 md:grid-cols-2 md:gap-5 lg:mt-8 lg:grid-cols-3 lg:gap-6"
                    ref={scope}
                >
                    {features.map((feature) => (
                        <Feature feature={feature} key={feature.title} />
                    ))}
                </ul>
            </div>
        </SectionContainer>
    );
};

export default Features;
