module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'ultramarine': '#4e0fff',
        'lavender-web': '#EEEDFE',
        'tart-orange': '#FF4343',
        'bittersweet': '#FF6C6C',
      }

    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
