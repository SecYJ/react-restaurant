import { useModalCtx } from "../contexts/ModalCtx";
import { Navigation, Keyboard } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {
    AiOutlineArrowLeft,
    AiOutlineArrowRight,
    AiOutlineClose,
} from "react-icons/ai";

const CarouselModal = () => {
    const { currentImgIndex, data, closeModal, updateIndex } = useModalCtx();

    return (
        <>
            <p className="fixed top-20 left-8 z-[3]">
                {currentImgIndex + 1} / {data.length}
            </p>
            <button
                type="button"
                className="fixed top-20 right-8 z-[3]"
                onClick={closeModal}
            >
                <AiOutlineClose />
            </button>
            <Swiper
                loop={true}
                onSlideChange={(e) => updateIndex(e.realIndex)}
                initialSlide={currentImgIndex}
                preventClicksPropagation={true}
                modules={[Navigation]}
                navigation={{
                    prevEl: ".swiper-modal-prev",
                    nextEl: ".swiper-modal-next",
                }}
                className="fixed top-1/2 left-1/2 z-[3] h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2"
            >
                {data.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img
                                src={item.bigImg}
                                className="h-full w-full object-cover"
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            <button
                type="button"
                className="swiper-modal-prev fixed top-1/2 left-8 z-[3] -translate-y-1/2"
            >
                <AiOutlineArrowLeft />
            </button>
            <button
                type="button"
                className="swiper-modal-next fixed top-1/2 right-8 z-[3] -translate-y-1/2"
            >
                <AiOutlineArrowRight />
            </button>
        </>
    );
};
export default CarouselModal;

// outside -> overlay with white / opacity 0.7
// an big image stick on the screen
// on top left show a small size of current pagination based on the image order
// show buttons on both sides  <- ->
