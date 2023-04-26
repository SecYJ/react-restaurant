import { BsWhatsapp, BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="bg-primary/90 text-white">
            <div className="container grid gap-4 py-8 md:grid-cols-[1fr_auto]">
                <p>本网页为练习使用, 并无商业用途.</p>
                <div className="flex items-center gap-8">
                    <a href="www.whatsapp.com">
                        <BsWhatsapp />
                    </a>
                    <a href="www.facebook.com">
                        <BsFacebook />
                    </a>
                    <a href="www.instagram.com">
                        <BsInstagram />
                    </a>
                </div>
                <div>
                    <p>满味芳點心专卖店.</p>
                    <p>
                        版權所有 © Copyright{new Date().getFullYear()} . All
                        Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
