import { motion } from "framer-motion";
import banner from "../assets/banner.jpg";

const Banner = () => {
    return (
        <section className="relative">
            <div className="absolute top-0 left-0 h-full w-full bg-primary" />
            <motion.img
                initial={{
                    y: "-100vh",
                }}
                animate={{
                    // y: [0, -70, 0, -40, 0],
                    y: 0,
                }}
                transition={{
                    duration: 1.5,
                    // duration: 1.5,
                    // damping
                    // repeat: Infinity,
                    // repeatType: "loop",
                }}
                // transition={{
                //     type: "spring",
                //     damping: 10,
                //     stiffness: 100,
                //     duration: 1,
                // }}
                src={banner}
                alt="一马风味横幅"
                className="h-[calc(100vh-80px)] w-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                <div className="flex flex-col items-center gap-4 [writing-mode:vertical-rl]">
                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 300,
                        }}
                        animate={{
                            opacity: 1.5,
                            y: 0,
                        }}
                        transition={{
                            duration: 1.5,
                            // delay: 0.25,
                        }}
                        className="relative text-6xl tracking-widest"
                    >
                        精致港式料理
                        <span className="absolute top-40 -left-16 whitespace-nowrap text-2xl">
                            小巧精致 每一口都是惊喜
                        </span>
                    </motion.h1>
                </div>
            </div>
        </section>
    );
};

export default Banner;
