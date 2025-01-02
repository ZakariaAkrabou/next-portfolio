/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#030712', // Very dark gray/black
          dark: '#000000',    // Pure black
          light: '#111827',   // Slightly lighter black
        },
        accent: {
          DEFAULT: '#10b981', // Emerald green
          hover: '#059669',   // Darker emerald
          light: '#34d399',   // Light emerald
        },
        secondary: {
          DEFAULT: '#10b981', // Using emerald as secondary too
          light: '#34d399',   // Light emerald
          dark: '#059669',    // Dark emerald
        },
        background: {
          DEFAULT: '#030712',
          dark: '#000000',
          light: '#111827',
          card: 'rgba(0, 0, 0, 0.8)',
        },
        text: {
          primary: '#f9fafb',     // Almost white
          secondary: '#e5e7eb',   // Light gray
          accent: '#10b981',      // Emerald
        },
        border: {
          DEFAULT: 'rgba(16, 185, 129, 0.1)', // Emerald border
          hover: 'rgba(16, 185, 129, 0.2)',   // Emerald border hover
        },
        gradient: {
          start: '#000000',
          middle: '#141414',
          end: '#030712',
        }
      },
      fontFamily: {
        primary: ["var(--font-jetbrains-mono)"],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(16, 185, 129, 0.15)',
        'glow-hover': '0 0 30px rgba(16, 185, 129, 0.25)',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      }
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
};
