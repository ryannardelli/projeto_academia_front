module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },

      fontSize: {
        h1: '50px',
        h2: '40px',
        h3: '30px',
        h4: '25px',
        h5: '20px',
        h6: '16px',
      },

      colors: {
        primary: '#0D0D0D',
        secondary: '#D90404',
        assets: '#D9042B',
      },
    },
  },
  plugins: [],
}
