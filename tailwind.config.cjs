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
            padding: {
                DEFAULT: "0.75rem",
                md: "1rem",
                lg: "1.5rem",
            },
        },
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#96262c",
                    secondary: "#216149",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
