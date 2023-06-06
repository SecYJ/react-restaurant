import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import PopularCard from "./PopularCard";

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
            observer={true}
        >
            {carouselData.map((item) => {
                return (
                    <SwiperSlide key={item.id} className="h-auto">
                        <PopularCard {...item} />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default CarouselSlider;
