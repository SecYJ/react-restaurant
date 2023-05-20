import { motion } from "framer-motion";
import { animateConfigs } from "../router";
import Banner from "../components/Banner";
import Features from "../components/Features";
import LatestNews from "../components/LatestNews";
import CarouselModal from "../components/CarouselModal";
import PopularFoods from "../components/PopularFoods";
import ModalCtxProvider from "../contexts/ModalCtx";
import Faq from "./Faq";
import ModalOverlay from "../components/ModalOverlay";
import Reviews from "../components/Reviews";
import { request } from "../services/api-client";

const Home = () => {
    return (
        <motion.div variants={animateConfigs} {...animateConfigs}>
            <Banner />
            {/* <LatestNews /> */}
            <Features />
            {/* <ModalCtxProvider>
                <ModalOverlay>
                <CarouselModal />
                </ModalOverlay>
                </ModalCtxProvider>
             */}
            {/* <PopularFoods /> */}
            <Reviews />
            <Faq />
        </motion.div>
    );
};

export default Home;
