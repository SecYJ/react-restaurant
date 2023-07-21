import useFoodMenu from "../hooks/useFoodMenu";
import randomData from "../services/randomData";
import CarouselSlider from "./CarouselSlider";
import SectionContainer from "./SectionContainer";
import SkeletonCard from "./skeleton/SkeletonCard";

const PopularList = () => {
    const { data: foodMenu, isLoading } = useFoodMenu();

    if (isLoading) {
        return (
            <SectionContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {[...Array(3)].map((_, i) => (
                        <SkeletonCard key={i} />
                    ))}
                </div>
            </SectionContainer>
        );
    }

    const popularMenu = foodMenu.filter((menu) => {
        return menu.rating >= 4.5;
    });

    const randomPopularMenu = randomData(popularMenu);

    return (
        <SectionContainer>
            <div className="mb-6 flex justify-center">
                <h2 className="border-r border-gray-200 pr-4 text-4xl font-bold text-primary">
                    热门点心
                </h2>
            </div>
            <CarouselSlider carouselData={randomPopularMenu} />
        </SectionContainer>
    );
};

export default PopularList;
