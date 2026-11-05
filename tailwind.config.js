/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFFFF', // Pure crisp white
          100: '#FFFFFF', // Pure crisp white (replaces all old cream/beige)
          200: '#F8F9FA', // Clean modern light gray (zero yellow/beige tint)
          300: '#E9ECEF', // Crisp subtle border
          400: '#DEE2E6', // Medium light border
          500: '#CED4DA',
        },
        maroon: {
          50: '#FDF2F4',
          100: '#FCE7EB',
          200: '#F9CFD7',
          300: '#F2A7B5',
          400: '#E57388',
          500: '#D14561',
          600: '#B82340',
          700: '#A31D36', // Vibrant jewel crimson
          800: '#88132B', // Royal Kashmiri ruby red
          900: '#650B1E', // Deep lustrous ruby wine
          950: '#3D0511', // Velvet midnight crimson
        },
        saffron: {
          50: '#FFFDF7',
          100: '#FFF9EB',
          200: '#FEF0CD',
          300: '#FDE197',
          400: '#FBBF24', // Luminous warm gold
          500: '#F59E0B', // Glowing royal kesari
          600: '#D97706', // Rich Kashmiri saffron gold
          700: '#B45309', // Burnished gold
          800: '#92400E',
          900: '#78350F',
        },
        spicegreen: {
          50: '#F2F8F4',
          100: '#E2EFE7',
          200: '#C4DEC0',
          300: '#9EC6A8',
          400: '#6FA87D',
          500: '#468958', // Fresh Kehwa herbal green
          600: '#336F44',
          700: '#235332', // Deep cardamom green
          800: '#1A4027',
          900: '#122E1C',
        },
        charcoal: {
          950: '#121110',
          900: '#1C1917', // Deep espresso black
          800: '#292524',
          700: '#44403C',
          600: '#57534E',
          500: '#78716C',
          400: '#A8A29E',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['Cinzel', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(101, 11, 30, 0.05)',
        'card': '0 10px 30px -4px rgba(28, 25, 23, 0.06), 0 4px 10px -2px rgba(101, 11, 30, 0.03)',
        'hover': '0 20px 38px -6px rgba(101, 11, 30, 0.12), 0 8px 16px -4px rgba(217, 119, 6, 0.1)',
        'glow-gold': '0 0 25px rgba(217, 119, 6, 0.35)',
        'glow-crimson': '0 0 30px rgba(136, 19, 43, 0.35)',
        'inner-gold': 'inset 0 0 15px rgba(217, 119, 6, 0.15)',
      },
      backgroundImage: {
        'radial-maroon': 'radial-gradient(circle at center, #88132B 0%, #3D0511 100%)',
        'subtle-kashmir': 'radial-gradient(circle at 10% 20%, rgba(217, 119, 6, 0.08) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(101, 11, 30, 0.05) 0%, transparent 40%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
      },
      animation: {
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.2s infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.92', transform: 'scale(1.02)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
