import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";

const variants = {
    initial: (custom) => {
        return {
            opacity: 0,
            x: custom % 2 === 0 ? "-400px" : "400px",
        };
    },
    animate: {
        opacity: 1,
        x: 0,
    },
    transition: {
        duration: 5,
        delay: 1.5,
    },
};

const ReviewCard = ({ review, index }) => {
    const { img, name, text } = review;

    return (
        <motion.li
            variants={variants}
            custom={index}
            className="grid grid-cols-[auto_1fr] items-center gap-2 rounded-md border border-white bg-white p-6"
        >
            <img src={img} className="h-16 w-16 rounded-full object-cover" />
            <div className="space-y-1">
                <p className="text-lg">{name}</p>
                <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <AiFillStar key={i} color="#96262c" />
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
        </motion.li>
    );
};
export default ReviewCard;
