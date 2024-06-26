import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            maxHeight: {
                'catv': '30vh'
            },
            borderRadius: {
                'scrollbar': "1rem"
            },
            fontSize: {
                '2xs': '0.75rem',
                'title': "1.5rem"
            }
        },
    },
    // darkMode: 'class',
    plugins: [
        nextui({
            themes: {
                dark: {
                    colors: {
                        background: "#1C1C1C",
                        foreground: "#ffffff",
                        ctm: "#3636368A",
                        // red: "#610726",
                        scrollbar: "#5C5C5C8A",
                        "scrollbar-active": "#8787878A"
                    },
                },
                light: {
                    colors: {
                        ctm: "#3636368A",
                        background: "#faf0e6",
                        // foreground: "",
                        // red: "#610726",
                        scrollbar: "#BEBEBE",
                        "scrollbar-active": "#8F8F8F"



                    },
                },
            },
        }),
    ],
};
export default config;
