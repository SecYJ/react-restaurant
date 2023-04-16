import { animate, motion } from "framer-motion";
import { animateConfigs } from "../router";

const About = () => {
    return (
        <motion.div
            variants={animateConfigs}
            {...animateConfigs}
            className="container  py-20"
        >
            <h1 className="mb-8 text-center text-5xl">关于我们</h1>
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
            <div className="mt-8 flex justify-center">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQflpsHpAa3v-Q0zRJ3n-0tfHEc1avN3tLo_w&usqp=CAU"
                    className="opacity-70"
                />
            </div>
        </motion.div>
    );
};
export default About;
