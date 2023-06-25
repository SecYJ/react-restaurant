import { useEffect, useRef, useState } from "react";
import { croppedImg } from "../services/croppedImg";
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
    }, []);

    return (
        <>
            {inView ? (
                <picture>
                    <source
                        type="image/webp"
                        media="(min-width: 1024px)"
                        srcSet={croppedImg(src, 350)}
                    />
                    <source
                        type="image/webp"
                        media="(min-width: 0px)"
                        srcSet={croppedImg(src, 300)}
                    />
                    <img
                        className="h-full w-full object-cover lg:h-[300px]"
                        src={imgFailLoadPlaceholder}
                        alt={alt}
                    />
                </picture>
            ) : (
                <img ref={imgRef} className="h-full w-full object-cover" />
            )}
        </>
    );
};

export default LazyImage;
