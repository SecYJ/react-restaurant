import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import PopularCard from "./PopularCard";
import "swiper/css";
import "swiper/css/navigation";

const modules = [Navigation, Autoplay];

const CarouselSlider = ({ carouselData }) => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            breakpoints={{
                768: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                    modules,
                    navigation: {
                        enabled: true,
                    },
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                    modules,
                    navigation: {
                        enabled: true,
                    },
                },
            }}
        >
            {carouselData.map((item) => {
                return (
                    <SwiperSlide key={item.id}>
                        <PopularCard {...item} />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default CarouselSlider;
