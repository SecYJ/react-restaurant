import { motion } from "framer-motion";
import Line from "../components/Line";
import paragraph from "../constants/aboutParagraph";
import useMediaQuery from "../hooks/useMediaQuery";
import { animateConfigs } from "../router";
import { SectionPy } from "../styles";

const About = () => {
    const matchMedia = useMediaQuery("(min-width:1024px)");

    return (
        <motion.section
            variants={animateConfigs}
            {...animateConfigs}
            className={`container ${SectionPy}`}
        >
            <div className="grid h-full content-center">
                <div className="my-6">
                    <h1 className="text-center text-5xl">关于我们</h1>
                    {matchMedia && <Line bg="bg-primary" />}
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
        </motion.section>
    );
};
export default About;
