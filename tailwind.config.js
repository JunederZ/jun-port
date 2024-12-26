/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        modalFadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        modalFadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        modalSlideIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        modalSlideOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.95)', opacity: '0' },
        },
        backdropFadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '0.6' },
        },
        backdropFadeOut: {
          '0%': { opacity: '0.6' },
          '100%': { opacity: '0' },
        },
      },
    },
  plugins: [],
  }
}


