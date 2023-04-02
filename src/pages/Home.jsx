import Banner from "../components/Banner";
import Features from "../components/Features";
import LatestNews from "../components/LatestNews";
import CarouselModal from "../components/CarouselModal";
import OurTeam from "../components/OurTeam";
import Populars from "../components/Populars";
import Reviews from "../components/Reviews";
import ModalCtxProvider, { useModalCtx } from "../contexts/ModalCtx";
import Faq from "./Faq";
import ModalOverlay from "../components/ModalOverlay";

const Home = () => {
    // const { isModalOpen } = useModalContext();

    return (
        <>
            <Banner />
            <LatestNews />
            <Features />
            <ModalCtxProvider>
                <Populars />
                <ModalOverlay>
                    <CarouselModal />
                </ModalOverlay>
            </ModalCtxProvider>
            <Faq />
        </>
    );
};
export default Home;
