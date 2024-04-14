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
            // colors: {
            //     ctm: "#3636368A"
            // }
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
                    },
                },
                light: {
                    colors: {
                        ctm: "#3636368A",
                    },
                },
            },
        }),
    ],
};
export default config;
