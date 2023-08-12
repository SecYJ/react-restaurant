import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import reviews from "../../constants/reviews";
import useMediaQuery from "../../hooks/useMediaQuery";
import SectionContainer from "../SectionContainer";
import ReviewCard from "./ReviewCard";

const CustomerReview = () => {
    const reviewRef = useRef(null);
    const isInView = useInView(reviewRef, {
        margin: "100px 0px 0px 0px",
        once: true,
    });
    const matchMedia = useMediaQuery("(max-width: 768px)");
    const reviewsData = matchMedia ? reviews.slice(0, 3) : reviews;

    const variants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5,
            },
        },
    };

    return (
        <SectionContainer className="overflow-hidden">
            <div className="mx-auto md:max-w-2xl lg:max-w-4xl">
                <h2 className="mb-8 text-center text-4xl font-bold text-primary">
                    看看食客们怎么说
                </h2>

                <div ref={reviewRef}>
                    {isInView && (
                        <motion.ul
                            className="grid gap-8 md:grid-cols-2"
                            variants={variants}
                            initial="initial"
                            animate="animate"
                        >
                            {reviewsData.map((review, index) => (
                                <ReviewCard
                                    key={index}
                                    index={index}
                                    review={review}
                                />
                            ))}
                        </motion.ul>
                    )}
                </div>
            </div>
        </SectionContainer>
    );
};
export default CustomerReview;
