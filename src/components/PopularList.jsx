import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import useFoodMenu from "../hooks/useFoodMenu";
import Line from "./Line";
import PopularCard from "./PopularCard";
import ProductsCarousel from "./CarouselSlider";

const PopularList = () => {
    const { data: foodMenu, isLoading } = useFoodMenu();

    if (isLoading) return null;

    const popularMenu = foodMenu
        .filter((menu) => {
            return menu.rating > 4.5;
        })
        .slice(0, 8);

    return (
        <section className="container py-6 lg:py-10">
            <div className="mb-6">
                <div className="flex justify-center">
                    <h2 className="border-r border-gray-200 pr-4 text-4xl font-bold text-primary">
                        热门点心
                    </h2>
                </div>
                <Line />
            </div>
            {/* <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={50}
                slidesPerView={3}
            >
                {popularMenu.map((item) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <PopularCard {...item} />
                        </SwiperSlide>
                    );
                })}
            </Swiper> */}
            <ProductsCarousel carouselData={popularMenu} />
        </section>
    );
};

export default PopularList;
