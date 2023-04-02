import { useCallback, useContext, useReducer, createContext } from "react";

// images
import food1 from "../assets/food-sm-1.jpg";
import food2 from "../assets/food-sm-2.jpg";
import food3 from "../assets/food-sm-3.jpg";
import food4 from "../assets/food-sm-4.jpg";
import food5 from "../assets/food-sm-5.jpg";
import food6 from "../assets/food-sm-6.jpg";
import food7 from "../assets/food-sm-7.jpg";
import food8 from "../assets/food-sm-8.jpg";

import foodLg1 from "../assets/food-lg-1.jpg";
import foodLg2 from "../assets/food-lg-2.jpg";
import foodLg3 from "../assets/food-lg-3.jpg";
import foodLg4 from "../assets/food-lg-4.jpg";
import foodLg5 from "../assets/food-lg-5.jpg";
import foodLg6 from "../assets/food-lg-6.jpg";
import foodLg7 from "../assets/food-lg-7.jpg";
import foodLg8 from "../assets/food-lg-8.jpg";

const data = [
    {
        img: food1,
        name: "bla",
        price: 7,
        bigImg: foodLg1,
    },
    {
        img: food2,
        name: "bla",
        price: 7,
        bigImg: foodLg2,
    },
    {
        img: food3,
        name: "bla",
        price: 7,
        bigImg: foodLg3,
    },
    {
        img: food4,
        name: "bla",
        price: 7,
        bigImg: foodLg4,
    },
    {
        img: food5,
        name: "bla",
        price: 7,
        bigImg: foodLg5,
    },
    {
        img: food6,
        name: "bla",
        price: 7,
        bigImg: foodLg6,
    },
    {
        img: food7,
        name: "bla",
        price: 7,
        bigImg: foodLg7,
    },
    {
        img: food8,
        name: "bla",
        price: 7,
        bigImg: foodLg8,
    },
];

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
