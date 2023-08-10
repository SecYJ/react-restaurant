import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

const staggerMenuItems = stagger(0.2, { startDelay: 0.5 });

const useListAnimation = (trigger) => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate("li", trigger ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }, {
            duration: 0.5,
            delay: trigger ? staggerMenuItems : 0,
        });
    }, [trigger]);

    return scope;
};
export default useListAnimation;
