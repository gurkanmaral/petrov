/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans'],
        roboto:['Roboto', 'sans'],
        fairplay: ['"FairPlay Display"', 'sans'],     
          inter: ['Inter', 'sans-serif'],
      },
      backgroundColor: {
        'custom-opacity': 'rgba(0,0,0,0.304)', 
      },
    },
  },
  plugins: [],
}
