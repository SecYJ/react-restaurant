import SkeletonPost from "../skeleton/SkeletonPost";

const MenuSkeleton = () => {
    return (
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(12).keys()].map((i) => (
                <SkeletonPost key={i} />
            ))}
        </ul>
    );
};

export default MenuSkeleton;
