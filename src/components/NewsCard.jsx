import { useNavigate } from "react-router-dom";

const NewsCard = () => {
    const navigate = useNavigate();

    return (
        <div
            className="card cursor-pointer bg-base-100 shadow-xl"
            onClick={() => navigate(`/news/post`)}
        >
            <figure className="w-full">
                <img
                    src="https://us.123rf.com/450wm/animicsgo/animicsgo2003/animicsgo200300002/143291145-hari-raya-aidilfitri-celebration-scene-greetings-template-with-wooden-house-cow-cresent-moon.jpg?ver=6"
                    alt="Shoes"
                    className="object-cover"
                />
            </figure>
            <div className="card-body items-center p-4">
                <h2 className="card-title">开斋节公告</h2>
            </div>
        </div>
    );
};

export default NewsCard;
