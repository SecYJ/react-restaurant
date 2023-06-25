import { AiFillStar } from "react-icons/ai";
import reviews from "../constants/reviews";
import SectionContainer from "./SectionContainer";

const Reviews = () => {
    return (
        <div className="bg-secondary">
            <SectionContainer>
                <div className="mx-auto md:max-w-2xl lg:max-w-4xl">
                    <h2 className="text-primary-dark mb-8 text-center text-[3rem] text-white">
                        看看食客们怎么说
                    </h2>

                    <ul className="grid gap-8 md:grid-cols-2">
                        {reviews.map((review) => {
                            const { text, name, img } = review;
                            return (
                                <li
                                    key={text}
                                    className="grid grid-cols-[auto_1fr] items-center gap-2 rounded-md border border-white bg-white p-6 transition-transform"
                                >
                                    <img
                                        src={img}
                                        className="h-16 w-16 rounded-full object-cover"
                                    />
                                    <div className="space-y-1">
                                        <p className="text-lg">{name}</p>
                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4, 5].map((i) => (
                                                <AiFillStar
                                                    key={i}
                                                    color="#96262c"
                                                />
                                            ))}
                                        </div>
                                        <p className="my-1 grow">
                                            {text.slice(0, 50)}
                                            {text.length > 50 && (
                                                <span className="cursor-pointer text-gray-600 hover:text-gray-400">
                                                    ...
                                                </span>
                                            )}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between"></div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </SectionContainer>
        </div>
        // <section className="mb-10 bg-secondary py-10 px-3">

        // </section>
    );
};
export default Reviews;
