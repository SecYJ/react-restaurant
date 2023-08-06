import { motion } from "framer-motion";
import Banner from "../components/Banner";
import Faq from "../components/Faq";
import PopularList from "../components/PopularList";
import CustomerReview from "../components/customer-review/CustomerReview";
import Features from "../components/features/Features";
import { animateConfigs } from "../router";

const Home = () => {
    return (
        <motion.div variants={animateConfigs} {...animateConfigs}>
            <Banner />
            <Features />
            <PopularList />
            <CustomerReview />
            <Faq />
        </motion.div>
    );
};

export default Home;
