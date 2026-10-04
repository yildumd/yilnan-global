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
          // ---- DARK surfaces ----
          base:    '#0C0A09',  // page background (near-black, warm)
          surface: '#1A1613',  // cards / raised panels
          surface2:'#221C18',  // hover / secondary panels
          border:  'rgba(255,255,255,0.06)',    // hairline dividers (dark)
          borderStrong:'rgba(255,255,255,0.15)',// button outlines, emphasis (dark)

          // ---- LIGHT surfaces (NEW) ----
          light:      '#FAF8F5',  // light section background (warm off-white)
          lightCard:  '#FFFFFF',  // cards on light sections
          lightBorder:'rgba(0,0,0,0.07)',   // hairline borders on light
          lightShadow:'rgba(0,0,0,0.04)',   // soft card shadow on light

          // ---- accent (amber/gold) — use SPARINGLY ----
          accent:      '#F59E0B',  // primary amber (dark bg + fills on light)
          accentDark:  '#1a1002',  // text ON amber buttons
          accentOnLight:'#B57912', // darker gold for GOLD TEXT on light bg (readable)
          accentSoft:  'rgba(245,158,11,0.08)', // pill/badge backgrounds
          accentBorder:'rgba(245,158,11,0.2)',  // pill/badge borders

          // ---- text ----
          text:      '#EDE8E2',  // primary on dark (warm off-white)
          textMuted: '#9a938c',  // secondary/body on dark
          textFaint: '#8a827b',  // captions, stat labels on dark
          ink:       '#1A1613',  // primary on light (headings)
          inkMuted:  '#6b645e',  // secondary/body on light
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