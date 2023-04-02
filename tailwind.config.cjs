/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            // colors: {
            //     primary: "#96262c",
            //     secondary: "#216149",
            //     danger: "#600b0f",
            //     accent: "#f2f0eb",
            //     gg: "#646464",
            // maybe use later
            // "x": "#9f8419"
            // },
        },
        container: {
            center: true,
            padding: "2rem",
        },
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#96262c",
                    secondary: "#216149",

                    // accent: "#1FB2A5",

                    // neutral: "#191D24",

                    // "base-100": "#2A303C",

                    // info: "#3ABFF8",

                    // success: "#36D399",

                    // secondary: "#FBBD23",
                    // secondary: "#D8353E",
                    // secondary: "#FCB244",
                    // secondary: "#D63A42",

                    // error: "#F87272",
                },
            },
            "light",
        ],
    },
    plugins: [require("daisyui")],
};
