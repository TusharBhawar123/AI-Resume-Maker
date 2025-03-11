/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        // eslint-disable-next-line no-undef
        require('daisyui')],
    daisyui: {
        themes:
            [
                "light",
                "dark",
                "cupcake",
                "bumblebee",
                "emerald",
                "corporate",
                "synthwave",
                "retro",
                "cyberpunk",
                "valentine",
                "halloween",
                "garden",
                "forest",
                "aqua",
                "lofi",
                "pastel",
                "fantasy",
                "wireframe",
                "black",
                "luxury",
                "dracula",
                "cmyk",
                "autumn",
                "business",
                "acid",
                "lemonade",
                "night",
                "coffee",
                "winter",
                "dim",
                "nord",
                "sunset",
                "saturate",
            ],
        theme: {
            extend: {
                animation: {
                    "fade-in-down": "fade-in-down 1s ease-out",
                    "fade-in-up": "fade-in-up 1s ease-out",
                    "bounce-in": "bounce-in 0.5s ease-out",
                },
                keyframes: {
                    "fade-in-down": {
                        "0%": {opacity: "0", transform: "translateY(-20px)"},
                        "100%": {opacity: "1", transform: "translateY(0)"},
                    },
                    "fade-in-up": {
                        "0%": {opacity: "0", transform: "translateY(20px)"},
                        "100%": {opacity: "1", transform: "translateY(0)"},
                    },
                    "bounce-in": {
                        "0%": {opacity: "0", transform: "scale(0.8)"},
                        "50%": {opacity: "1", transform: "scale(1.1)"},
                        "100%": {opacity: "1", transform: "scale(1)"},
                    },
                },
            },
        }
    }
}
