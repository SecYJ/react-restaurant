import { motion } from "framer-motion";

const list = {
    visible: {
        opacity: 1,
        duration: 5,
        transition: {
            staggerChildren: 1, // 设置子元素之间的延迟时间
            // delayChildren: 3,
        },
    },
    hidden: {
        opacity: 0,
    },
};

const listItem = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -20 },
};

const MyList = () => {
    return (
        <motion.ul
            variants={list}
            initial="hidden"
            animate="visible"
            style={{ display: "flex" }}
        >
            <motion.li variants={listItem}>Item 1</motion.li>
            <motion.li variants={listItem}>Item 2</motion.li>
            <motion.li variants={listItem}>Item 3</motion.li>
        </motion.ul>
    );
};

export default MyList;
