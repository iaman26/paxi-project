/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'career-bg': "url('/assets/images/carrer-bg.png')",
      },
      animation: {
        bg: 'bg-animation 30s cubic-bezier(0.3, 0, 0.7, 1) infinite',
      },
      keyframes: {
        'bg-animation': {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100%' },
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
