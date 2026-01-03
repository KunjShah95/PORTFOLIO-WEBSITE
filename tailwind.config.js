/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Outfit"', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            borderRadius: {
                'none': '0',
                'sm': '2px',
                'DEFAULT': '4px',
                'surgical': '1px',
                'full': '9999px',
            },
            colors: {
                bg: "rgb(var(--bg-main) / <alpha-value>)",
                surface: "rgb(var(--surface-main) / <alpha-value>)",
                surfaceHighlight: "rgb(var(--surface-highlight) / <alpha-value>)",
                border: "rgb(var(--border-main) / <alpha-value>)",
                primary: "rgb(var(--primary-rgb) / <alpha-value>)",
                secondary: "rgb(var(--secondary-rgb) / <alpha-value>)",
                accent: "rgb(var(--primary-rgb) / <alpha-value>)",
                muted: "rgb(var(--txt-muted) / <alpha-value>)",
                txt: "rgb(var(--txt-main) / <alpha-value>)",
                txtDim: "rgb(var(--txt-dim) / <alpha-value>)"
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'subtle-grid': 'linear-gradient(to right, rgb(var(--border-main)) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--border-main)) 1px, transparent 1px)',
                'academic-dots': 'radial-gradient(rgb(var(--border-main)) 1px, transparent 1px)',
            },
            animation: {
                'glitch': 'glitch 1s linear infinite',
                'scan': 'scan 8s linear infinite',
                'reveal': 'reveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'fade-in': 'fadeIn 1s ease-out forwards',
                'beam': 'beam 5s ease-in-out infinite',
                'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 10s ease-in-out infinite',
            },
            keyframes: {
                glitch: {
                    '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
                    '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
                    '62%': { transform: 'translate(0,0) skew(5deg)' },
                },
                scan: {
                    '0%': { backgroundPosition: '0% 0%' },
                    '100%': { backgroundPosition: '0% 100%' },
                },
                reveal: {
                    '0%': { opacity: '0', transform: 'translateY(20px) scale(0.98)' },
                    '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                beam: {
                    '0%': { transform: 'translateX(-100%)' },
                    '50%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(-100%)' }
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' }
                }
            }
        },
    },
    plugins: [],
}
