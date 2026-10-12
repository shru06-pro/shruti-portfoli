/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#F8F6F2',
        surface: '#FFFFFF',
        ink: '#27272A',
        muted: '#6B6B73',
        border: '#E7E4DE',
        accent: {
          DEFAULT: '#8478A8',
          soft: '#A99BD8',
          tint: '#EEEAF7',
        },
        success: '#7C9A85',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', '"Newsreader"', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'monospace'],
        script: ['"Caveat"', 'cursive'],
      },
      fontSize: {
        'display': ['clamp(3rem, 9vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(2rem, 6vw, 4rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
      },
      boxShadow: {
        'diffuse': '0 10px 40px -10px rgba(39,39,42,0.12)',
        'diffuse-lg': '0 20px 60px -15px rgba(39,39,42,0.15)',
        'diffuse-sm': '0 4px 20px -8px rgba(39,39,42,0.10)',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '2xl': '1.25rem',
      },
      animation: {
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'wave': 'wave 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(124,154,133,0.4)' },
          '50%': { opacity: '0.7', boxShadow: '0 0 0 6px rgba(124,154,133,0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '20%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-8deg)' },
          '60%': { transform: 'rotate(14deg)' },
          '80%': { transform: 'rotate(-4deg)' },
        },
      },
    },
  },
  plugins: [],
};
