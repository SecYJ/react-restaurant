import { BsCardChecklist } from "react-icons/bs";
import { FaCarrot, FaHandsWash } from "react-icons/fa";
import { MdOutlineOutdoorGrill, MdRestaurantMenu } from "react-icons/md";
import { SiCodechef } from "react-icons/si";

const features = [
    {
        title: "多样化",
        text: "多种点心以及包括各种蒸、煮、炸、烤等烹饪方法的小食以满足顾客的不同口味需求。",
        icon: <BsCardChecklist />,
    },
    {
        title: "新鲜食材",
        text: "每项食材都经过严格挑选和筛选的，保证最高品质. 我们相信，一道好吃的点心都是从新鲜的食材开始。",
        icon: <FaCarrot />,
    },
    {
        title: "手工制作",
        text: "与市面上看到的点心不同，我们所有的点心和包点都是属于纯手工制作。",
        icon: <FaHandsWash />,
    },
    {
        title: "现煮现卖",
        text: "为了让顾客可以品尝到最好的鲜度和口感, 本店所有产品都是现煮现卖。",
        icon: <MdOutlineOutdoorGrill />,
    },
    {
        title: "专业的厨师",
        text: "我们的点心厨师都是有经过严格考核的多年的经验以确保为您提供最好的点心。",
        icon: <SiCodechef />,
    },
    {
        title: "休闲氛围",
        text: "点心餐厅通常都营造出轻松、休闲的氛围，让顾客在品尝点心的同时也能享受到放松身心的感觉",
        icon: <MdRestaurantMenu />,
    },
];

export default features;
