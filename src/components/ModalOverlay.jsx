import { createPortal } from "react-dom";
import { useModalCtx } from "../contexts/ModalCtx";

const ModalOverlay = ({ children }) => {
    const { isModalOpen, dispatch } = useModalCtx();

    if (!isModalOpen) return null;

    const closeModal = () => {
        dispatch({ type: "TOGGLE_MODAL", payload: { modalOpen: false } });
    };

    return (
        <>
            {createPortal(
                <>
                    <div
                        className="fixed top-0 left-0 z-[3] h-full w-full overflow-y-auto overflow-x-hidden bg-white opacity-70"
                        onClick={closeModal}
                    />
                    {children}
                </>,
                document.body
            )}
        </>
    );
};
export default ModalOverlay;
