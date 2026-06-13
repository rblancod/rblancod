import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette derived from the LUCULUC logo
        luculuc: {
          50: '#eef7f0',
          100: '#d6ecda',
          200: '#a9d6b3',
          300: '#74bb85',
          400: '#46a05e',
          500: '#2c8347',
          600: '#1f6838',
          700: '#1a5230',
          800: '#143d25',
          900: '#0d2719',
          950: '#06160e',
        },
        // Deep forest backgrounds (dark theme base)
        forest: {
          50: '#f1f6f3',
          100: '#dcebe1',
          200: '#bcd8c6',
          300: '#8fbb9f',
          400: '#5e9772',
          500: '#3e7a55',
          600: '#2c6042',
          700: '#244d36',
          800: '#1d3d2c',
          900: '#122418',
          950: '#0a1610',
        },
        // Red poison-dart-frog accent
        frog: {
          400: '#f15a4a',
          500: '#e23b2e',
          600: '#c5281d',
        },
        cream: '#f5f3ec',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        float: 'float 6s ease-in-out infinite',
        'marquee-left': 'marquee-left 28s linear infinite',
        'marquee-right': 'marquee-right 32s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'marquee-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
export default config
