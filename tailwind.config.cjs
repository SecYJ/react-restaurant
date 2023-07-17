/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
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
