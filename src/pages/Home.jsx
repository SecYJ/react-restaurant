import { motion } from "framer-motion";
import { animateConfigs } from "../router";
import Banner from "../components/Banner";
import Features from "../components/Features";
import CarouselModal from "../components/CarouselModal";
import Faq from "./Faq";
import Reviews from "../components/Reviews";
import PopularList from "../components/PopularList";
import PopularFoods from "../components/PopularFoods";

const Home = () => {
    return (
        <motion.div variants={animateConfigs} {...animateConfigs}>
            <Banner />
            <Features />
            {/* <ModalCtxProvider>
                <ModalOverlay>
                <CarouselModal />
                </ModalOverlay>
                </ModalCtxProvider>
             */}
            {/* <PopularFoods /> */}
            <PopularList />
            <Reviews />
            <Faq />
        </motion.div>
    );
};

export default Home;
