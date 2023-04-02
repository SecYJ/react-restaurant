import { useEffect, useState } from "react";

const useDebounce = (value = "", delay = 1000) => {
    const [debounce, setDebounce] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounce(value);
        }, delay);

        return () => clearTimeout(timer);
    }, [value, delay]);

    return debounce;
};

export default useDebounce;
