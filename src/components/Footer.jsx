import { BsWhatsapp, BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="bg-primary/90 text-white">
            <div className="container flex justify-between py-8">
                {/* <h3 className="mb-8 text-center">第一时间获取最新资讯</h3> */}
                <div>
                    <p className="mb-8">本网页为练习使用, 并无商业用途</p>
                    <p>满味芳點心專賣</p>
                    <p>
                        {" "}
                        版權所有 © Copyright{new Date().getFullYear()} . All
                        Rights Reserved.
                    </p>
                </div>

                <div className="flex gap-8">
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
            </div>
        </footer>
    );
};
export default Footer;
