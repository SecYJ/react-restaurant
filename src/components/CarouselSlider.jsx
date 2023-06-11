import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import PopularCard from "./PopularCard";
import "swiper/css";
import "swiper/css/navigation";

const CarouselSlider = ({ carouselData }) => {
    return (
        <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
                enabled: false,
            }}
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
                    navigation: {
                        enabled: true,
                    },
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 24,
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
