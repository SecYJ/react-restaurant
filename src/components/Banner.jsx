import banner from "../assets/banner.jpg";

const Banner = () => {
    return (
        <section className="relative">
            <div className="absolute top-0 left-0 h-full w-full bg-black/40" />
            <img
                src={banner}
                alt="一马风味横幅"
                className="h-[calc(100vh-80px)] w-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                <div className="flex flex-col items-center gap-4 [writing-mode:vertical-rl]">
                    <h1 className="relative text-6xl tracking-widest">
                        精致港式料理
                        <span className="absolute top-40 -left-16 whitespace-nowrap text-2xl">
                            小巧精致 每一口都是惊喜
                        </span>
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Banner;
