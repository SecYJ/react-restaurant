const PopularCard = ({ name, price, img }) => {
    return (
        <div
            className="card-compact card-bordered card max-h-[400px] rounded-md border-gray-300 shadow-lg"
            key={name}
        >
            <figure className="group relative cursor-pointer overflow-hidden">
                <img
                    src={img}
                    alt={name}
                    className="h-full w-full object-cover duration-300 lg:group-hover:scale-[1.2]"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="text-lg">RM {price}</p>
            </div>
        </div>
    );
};
export default PopularCard;
