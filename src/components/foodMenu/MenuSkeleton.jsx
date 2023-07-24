import useMediaQuery from "../../hooks/useMediaQuery";
import SkeletonCard from "../skeleton/SkeletonCard";

const MenuSkeleton = () => {
    const tabletMedia = useMediaQuery("min-width: 768px");
    const desktopMedia = useMediaQuery("min-width: 1024px");

    let skeletonAmount = 0;

    if (desktopMedia) skeletonAmount = 12; // PC
    if (tabletMedia && !desktopMedia) skeletonAmount = 6;
    else skeletonAmount = 4;

    return (
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(skeletonAmount).keys()].map((i) => (
                <SkeletonCard key={i} />
            ))}
        </ul>
    );
};

export default MenuSkeleton;
