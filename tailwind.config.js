/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                db: {
                    teal: '#0D9488',       // Teal 600 – primary brand
                    dark: '#0F172A',       // Slate 950 – deep professional dark
                    grey: '#F8FAFC',       // Slate 50 – clean background
                    text: '#334155',       // Slate 700 – readable body text
                    accent: '#EAB308',      // Warm premium yellow – energy accent
                    'accent-dark': '#CA8A04', // Darker yellow for hover states
                    'accent-light': '#FEF9C3', // Soft yellow bg tint
                },
                primary: {
                    DEFAULT: '#0D9488',
                    dark: '#0F766E',
                    light: '#14B8A6',
                },
                accent: {
                    DEFAULT: '#EAB308',
                    dark: '#CA8A04',
                    light: '#FEF9C3',
                },
            },
            fontFamily: {
                sans: ['Inter', 'Poppins', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'slide-up': 'slideUp 0.5s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}
