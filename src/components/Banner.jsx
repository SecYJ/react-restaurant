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
            {/* <img
                src="https://sgp1.digitaloceanspaces.com/tz-mag-my/wp-content/uploads/2020/07/030307072222/81427781_2944268302273805_5697201077930164224_o.jpg"
                alt="一马风味横幅"
                className="h-[calc(100vh-120px)] w-full object-cover"
            /> */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                <div className="flex flex-col items-center gap-4 [writing-mode:vertical-rl]">
                    <h1 className="relative text-6xl tracking-widest">
                        精致港式料理{" "}
                        <span className="absolute top-40 -left-32 whitespace-nowrap text-2xl">
                            一口幸福 一点点心
                        </span>
                        <span className="absolute top-40 -left-16 whitespace-nowrap text-2xl">
                            小巧精致 每一口都是惊喜
                        </span>{" "}
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Banner;
