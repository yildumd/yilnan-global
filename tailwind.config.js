/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yilnan: {
          // base surfaces (dark)
          base:    '#0C0A09',  // page background (near-black, warm)
          surface: '#1A1613',  // cards / raised panels
          surface2:'#221C18',  // hover / secondary panels
          border:  'rgba(255,255,255,0.06)',   // hairline dividers
          borderStrong:'rgba(255,255,255,0.15)',// button outlines, emphasis

          // accent (amber/gold) — use SPARINGLY
          accent:      '#F59E0B',  // primary amber
          accentDark:  '#1a1002',  // text ON amber buttons
          accentSoft:  'rgba(245,158,11,0.08)', // pill/badge backgrounds
          accentBorder:'rgba(245,158,11,0.2)',  // pill/badge borders

          // text
          text:      '#EDE8E2',  // primary (warm off-white)
          textMuted: '#9a938c',  // secondary/body
          textFaint: '#8a827b',  // captions, stat labels
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}