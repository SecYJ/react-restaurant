import { ImSearch } from "react-icons/im";
import { useModalCtx } from "../contexts/ModalCtx";
import useMediaQuery from "../hooks/useMediaQuery";

const PopularCard = ({ name, price, imgFallback, index }) => {
    const { dispatch } = useModalCtx();

    const matchMedia = useMediaQuery("(min-width:1024px)");

    const openModal = () => {
        if (!matchMedia) return;

        dispatch({
            type: "TOGGLE_MODAL",
            payload: {
                modalOpen: true,
                index,
            },
        });
    };

    return (
        <div
            className="card-compact card-bordered card max-h-[400px] rounded-md border-gray-300 shadow-lg"
            key={name}
        >
            <figure
                className="group relative cursor-pointer overflow-hidden"
                onClick={openModal}
            >
                <div className="absolute inset-0 z-[1] hidden place-items-center opacity-0 duration-300 lg:grid lg:group-hover:bg-black/40 lg:group-hover:opacity-100">
                    <div className="grid justify-items-center">
                        <ImSearch color="#fff" />
                        <p className="text-white">MORE</p>
                    </div>
                </div>

                <img
                    src={imgFallback}
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
