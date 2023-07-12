const Skeleton = ({ type = "text", classes }) => {
    let styles = null;

    if (type === "img") styles = "h-[300px]";
    if (type === "title") styles = "h-5 my-3";
    if (type === "text") styles = "h-3 my-2";

    const classNames = `bg-gray-300 rounded-md animate-pulse ${styles} ${classes}`;
    return <div className={classNames} />;
};

export default Skeleton;
