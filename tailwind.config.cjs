/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['inter', 'system-ui'],
    },
    extend: {
      screens: {
        xs: '550px',
      },
    },
  },

  plugins: [require('@tailwindcss/typography')],
}
