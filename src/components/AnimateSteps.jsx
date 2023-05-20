import React from "react";
import { motion } from "framer-motion";

const sliderVariants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0,
        };
    },
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction) => {
        return {
            x: direction < 0 ? "100%" : "-100%",
            opacity: 0,
        };
    },
};

const AnimateSteps = ({ children, index }) => {
    return (
        <motion.div
            key={index}
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
            }}
            variants={sliderVariants}
            initial={index === 0 ? "center" : "enter"}
            animate={index === currentSlide ? "center" : "exit"}
            exit="exit"
            custom={direction}
            transition={{
                x: { type: "spring", stiffness: 300, damping: 200 },
            }}
        >
            {children}
        </motion.div>
    );
};

export default AnimateSteps;
