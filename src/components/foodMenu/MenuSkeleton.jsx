import SkeletonPost from "../skeleton/SkeletonPost";

const MenuSkeleton = () => {
    return (
        <ul className="grid grid-cols-3 gap-8">
            {[...Array(12).keys()].map((i) => (
                <SkeletonPost key={i} />
            ))}
        </ul>
    );
};

export default MenuSkeleton;
