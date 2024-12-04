/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [],
  safelist: [
    'flex',
    'flex-row',
    'flex-col',
    {
      pattern: /^justify-/
    },
    {
      pattern: /^items-/
    },
    {
      pattern: /^gap-/
    }
  ]
}
