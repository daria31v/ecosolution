import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#173D33",
        secondary: "#97D28B",
        green_light: "#DCEFD8",
        white: "#FFFFFF",
        black: "#292D32",
        grey: "#BDBDBD",
        grey_light: "#EAEDF1",
        green_25: "#173D3340",
        red_error: '#D28B8B'
      },
      backgroundColor: {
        bg_main: "#F3F5FA",
        bg_card: "#EAEDF1", 
        bg_burger_menu: "#173D33BF",
      },
      fontFamily: {
        main: ["Fira_Sans", "sans-serif"],
        extra: ["Oswald", "sans-serif"],
      },
      screens: {
        'sm': '360px',
        'xl': '768px',
        '2xl': '1280px'
        
      }
    }
  },
  plugins: [],
};
export default config;
