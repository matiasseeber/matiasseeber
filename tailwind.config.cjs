/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily:{
        primary: 'Playfair Display',
        body: 'Work Sans',
        inter: ["inter", "serif"]
      },
      boxShadow: {
        'center': '0 0 10px 5px',
      },
      borderColor:{
        accent_hover: "#fa7505"
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          lg: '3rem',
        },
      },
      colors: {
        primary: '#050402',
        secondary: '#1C1D24',
        tertiary: '#131419',
        accent: {
          DEFAULT: '#ac6b34',
          hover: '#fa7505',
        },
        paragraph: '#878e99',
      },
      content: {
        about: 'url("/src/assets/img/outline-text/about.svg")',
        portfolio: 'url("/src/assets/img/outline-text/portfolio.svg")',
        services: 'url("/src/assets/img/outline-text/services.svg")',
        testimonials: 'url("/src/assets/img/outline-text/testimonials.svg")',
        contact: 'url("/src/assets/img/outline-text/contact.svg")',
      },
    },
  },
  plugins: [],
}
