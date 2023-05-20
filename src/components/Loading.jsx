import LoadingSvg from "../assets/loading.svg";

const Loading = () => {
    return (
        <div className="grid min-h-screen place-items-center">
            <img src={LoadingSvg} alt="Loading" />
        </div>
    );
};

export default Loading;
