import { motion } from "framer-motion";
import SectionContainer from "../components/SectionContainer";
import paragraph from "../constants/aboutParagraph";
import { animateConfigs } from "../router";

const About = () => {
    return (
        <motion.div variants={animateConfigs} {...animateConfigs}>
            <SectionContainer>
                <div className="grid h-full content-center">
                    <div className="my-6">
                        <h1 className="text-center text-5xl">关于我们</h1>
                    </div>
                    <div className="mt-6 grid gap-6 md:mx-auto md:max-w-2xl lg:max-w-4xl lg:grid-cols-2">
                        <div className="space-y-8 text-xl">
                            {paragraph.map((p) => (
                                <p className="first-letter:text-3xl" key={p}>
                                    {p}
                                </p>
                            ))}
                        </div>
                        <div className="overflow-hidden rounded-md">
                            <img
                                src="https://farm4.staticflickr.com/3793/13714239304_391e50193d_b.jpg"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </motion.div>
    );
};
export default About;
