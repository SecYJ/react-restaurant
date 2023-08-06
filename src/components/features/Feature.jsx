const Feature = ({ feature }) => {
    const { icon, title, text } = feature;

    return (
        <li
            className="card-bordered card border-gray-300 shadow-xl"
            key={title}
        >
            <div className="card-body gap-6">
                <div className="flex items-center gap-8 text-2xl">
                    <div className="text-secondary">{icon}</div>
                    <h3 className="text-center font-semibold text-primary">
                        {title}
                    </h3>
                </div>
                <p>{text}</p>
            </div>
        </li>
    );
};
export default Feature;
