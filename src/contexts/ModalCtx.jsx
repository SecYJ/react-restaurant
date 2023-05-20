import { useCallback, useContext, useReducer, createContext } from "react";

// const data = [
//     {
//         img: food1,
//         name: "bla",
//         price: 7,
//         bigImg: foodLg1,
//     },
//     {
//         img: food2,
//         name: "bla",
//         price: 7,
//         bigImg: foodLg2,
//     },
//     {
//         img: food3,
//         name: "bla",
//         price: 7,
//         bigImg: foodLg3,
//     },
//     {
//         img: food4,
//         name: "bla",
//         price: 7,
//         bigImg: foodLg4,
//     },
//     {
//         img: food5,
//         name: "bla",
//         price: 7,
//         bigImg: foodLg5,
//     },
//     {
//         img: food6,
//         name: "bla",
//         price: 7,
//         bigImg: foodLg6,
//     },
//     {
//         img: food7,
//         name: "bla",
//         price: 7,
//         bigImg: foodLg7,
//     },
//     {
//         img: food8,
//         name: "bla",
//         price: 7,
//         bigImg: foodLg8,
//     },
// ];

const ModalCtx = createContext();

const initialState = {
    isModalOpen: false,
    page: 1,
    currentImgIndex: 1,
};

const reducer = (state, action) => {
    if (action.type === "TOGGLE_MODAL") {
        const { modalOpen, index = null } = action.payload;
        const body = document.body.classList;

        if (modalOpen) body.add("overflow-hidden");
        else body.remove("overflow-hidden");

        return {
            ...state,
            isModalOpen: modalOpen,
            currentImgIndex: index,
        };
    }

    if (action.type === "UPDATE_INDEX") {
        return { ...state, currentImgIndex: action.payload };
    }

    return state;
};

const ModalCtxProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const openModal = useCallback((modalData) => {
        const { img, index, modalOpen } = modalData;
        dispatch({
            type: "TOGGLE_MODAL",
            payload: {
                modalOpen,
                img,
                index,
            },
        });
    }, []);

    const closeModal = useCallback(() => {
        dispatch({ type: "TOGGLE_MODAL", payload: { modalOpen: false } });
    }, []);

    const updateIndex = useCallback((index) => {
        dispatch({ type: "UPDATE_INDEX", payload: index });
    }, []);

    return (
        <ModalCtx.Provider
            value={{
                ...state,
                dispatch,
                openModal,
                data,
                closeModal,
                updateIndex,
            }}
        >
            {children}
        </ModalCtx.Provider>
    );
};

export const useModalCtx = () => useContext(ModalCtx);

export default ModalCtxProvider;
