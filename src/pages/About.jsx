import { motion } from "framer-motion";
import Line from "../components/Line";
import { animateConfigs } from "../router";
import { SectionPy } from "../styles";

const About = () => {
    return (
        <motion.section
            variants={animateConfigs}
            {...animateConfigs}
            className={`container ${SectionPy}`}
        >
            <h1 className="mb-8 text-center text-5xl">关于我们</h1>
            <Line />
            <div className="mt-6 grid gap-6 md:mx-auto md:max-w-2xl lg:max-w-4xl lg:grid-cols-2">
                <div className="space-y-8">
                    <p>
                        欢迎来到我们的点心餐厅，我们是一家致力于提供优质点心和舒适用餐体验的餐厅。我们的餐厅选址便利，环境优雅，有着温馨舒适的用餐氛围，是与亲朋好友共度美好时光的理想场所。
                    </p>
                    <p>
                        我们的厨师团队拥有多年的丰富经验和专业技能，致力于为顾客呈现正宗、美味的点心，每一个制作环节都严格把控，确保食材的新鲜、卫生和品质。我们的菜单涵盖了各种经典和创新的点心，包括小笼包、烧卖、叉烧酥等，以及配套的各种茶饮和甜品，让您在品尝美食的同时也能感受到浓郁的中华文化氛围。
                    </p>
                    <p>
                        我们致力于提供卓越的客户服务，为每一位客人提供温馨周到的服务和舒适愉悦的用餐环境。无论是家庭聚会、朋友聚餐还是商务宴请，我们都能为您量身定制个性化的服务和菜单，让您和您的客人留下美好的回忆。
                    </p>
                    <p>
                        感谢您选择我们的点心餐厅，我们将一如既往地为您提供最优质的美食和服务，期待您的光临！
                    </p>
                </div>
                <div className="overflow-hidden rounded-md">
                    <img
                        src="https://i2.wp.com/www.mastersteam.com.my/wp-content/uploads/2020/11/The-Peninsula-Hong-Hong-Dim-Sum-Cooking-Class-693x390-1.jpg?resize=660%2C371&ssl=1"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </motion.section>
    );
};
export default About;
