import { ImSearch } from "react-icons/im";
import { useModalCtx } from "../contexts/ModalCtx";

const PopularItem = ({ name, price, img, bigImg, index }) => {
    const { dispatch } = useModalCtx();

    const openModal = () => {
        dispatch({
            type: "TOGGLE_MODAL",
            payload: {
                modalOpen: true,
                index,
            },
        });
    };

    return (
        <div className="card-bordered card card-compact rounded-md border-gray-300 shadow-lg">
            <figure
                className="group relative cursor-pointer overflow-hidden"
                onClick={openModal}
            >
                <div className="absolute inset-0 z-[1] grid place-items-center opacity-0 duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                    <div className="grid justify-items-center">
                        <ImSearch className="" color="#fff" />
                        <p className="text-white">MORE</p>
                    </div>
                </div>

                <img
                    src={img}
                    alt={name}
                    className="h-full w-full duration-300 group-hover:scale-[1.2]"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="text-lg">RM {price}</p>
            </div>
        </div>
    );
};
export default PopularItem;
