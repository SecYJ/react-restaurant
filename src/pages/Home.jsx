import { motion } from "framer-motion";
import { animateConfigs } from "../router";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Faq from "../components/Faq";
import Reviews from "../components/Reviews";
import PopularList from "../components/PopularList";

const Home = () => {
    return (
        <motion.div variants={animateConfigs} {...animateConfigs}>
            <Banner />
            <Features />
            <PopularList />
            <Reviews />
            <Faq />
        </motion.div>
    );
};

export default Home;
