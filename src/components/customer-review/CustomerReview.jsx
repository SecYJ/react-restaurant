import { useInView } from "framer-motion";
import { useRef } from "react";
import reviews from "../../constants/reviews";
import SectionContainer from "../SectionContainer";
import ReviewCard from "./ReviewCard";
import useMediaQuery from "../../hooks/useMediaQuery";

const CustomerReview = () => {
    const reviewRef = useRef(null);
    const isInView = useInView(reviewRef, {
        margin: "100px 0px 0px 0px",
        once: true,
    });
    const matchMedia = useMediaQuery("(max-width: 768px)");
    const reviewsData = matchMedia ? reviews.slice(0, 3) : reviews;

    return (
        <SectionContainer className="overflow-hidden">
            <div className="mx-auto md:max-w-2xl lg:max-w-4xl">
                <h2 className="mb-8 text-center text-4xl font-bold text-primary">
                    看看食客们怎么说
                </h2>

                <ul className="grid gap-8 md:grid-cols-2" ref={reviewRef}>
                    {isInView &&
                        reviewsData.map((review, index) => (
                            <ReviewCard
                                review={review}
                                index={index}
                                key={index}
                            />
                        ))}
                </ul>
            </div>
        </SectionContainer>
    );
};
export default CustomerReview;
