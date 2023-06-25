import useFoodMenu from "../hooks/useFoodMenu";
import CarouselSlider from "./CarouselSlider";
import SectionContainer from "./SectionContainer";

const PopularList = () => {
    const { data: foodMenu, isLoading } = useFoodMenu();

    if (isLoading) return null;

    const popularMenu = foodMenu
        .filter((menu) => {
            return menu.rating > 4.7;
        })
        .slice(0, 8);

    return (
        <SectionContainer>
            <div className="mb-6 flex justify-center">
                <h2 className="border-r border-gray-200 pr-4 text-4xl font-bold text-primary">
                    热门点心
                </h2>
            </div>
            <CarouselSlider carouselData={popularMenu} />
        </SectionContainer>
    );
};

export default PopularList;
