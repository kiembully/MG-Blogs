/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'feed': '#EBF0F4',
      'white': '#ffffff',
      'neutral-100': '#ECF1F3',
      'neutral-800': '#111215',
      'orange': '#C8512C',
      'primary-500': '#6366F1'
    },
    spacing: {
      '13': '3.25rem',
      '15': '3.75rem',
      '128': '32rem',
      '144': '36rem',
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
    },
    extend: {},
  },
  plugins: []
};
