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
          DEFAULT: '#0a0a0a', // Deep black
          dark: '#000000',    // Pure black
          light: '#141414',   // Dark gray
        },
        accent: {
          DEFAULT: '#ff3333', // Strong red
          hover: '#cc0000',   // Dark red
          light: '#ff6666',   // Red
        },
        secondary: {
          DEFAULT: '#333333', // Dark gray
          light: '#4d4d4d',   // Medium gray
          dark: '#1a1a1a',    // Very dark gray
        },
        background: {
          DEFAULT: '#0a0a0a',
          dark: '#000000',
          light: '#141414',
          card: 'rgba(20, 20, 20, 0.7)',
        },
        text: {
          primary: '#ffffff',     // White
          secondary: '#999999',   // Dark gray
          accent: '#ff3333',      // Strong red
        },
        border: {
          DEFAULT: 'rgba(255, 51, 51, 0.1)', // Red border
          hover: 'rgba(255, 51, 51, 0.2)',   // Red border hover
        },
        gradient: {
          start: '#0a0a0a',
          middle: '#141414',
          end: '#000000',
        }
      },
      fontFamily: {
        primary: ["var(--font-jetbrains-mono)"],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 51, 51, 0.15)',
        'glow-hover': '0 0 30px rgba(255, 51, 51, 0.25)',
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
