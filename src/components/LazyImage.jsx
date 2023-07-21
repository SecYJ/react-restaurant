import { useEffect, useRef, useState } from "react";
import imgFailLoadPlaceholder from "../assets/noImage.webp";

const LazyImage = ({ src, alt }) => {
    const imgRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const callback = (entries) => {
            if (entries[0].isIntersecting) setInView(true);
        };
        const observer = new IntersectionObserver(callback, { threshold: 0.2 });
        observer.observe(imgRef.current);
        return () => observer.disconnect();
    }, [src]);

    return (
        <>
            {inView ? (
                <picture>
                    <source type="image/webp" srcSet={src} />
                    <img
                        className="h-full w-full object-cover lg:h-[300px]"
                        src={imgFailLoadPlaceholder}
                        alt={alt}
                    />
                </picture>
            ) : (
                <img ref={imgRef} className="h-[300px] w-full object-cover" />
            )}
        </>
    );
};

export default LazyImage;
