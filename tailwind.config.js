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
          DEFAULT: '#030712', 
          dark: '#000000',    
          light: '#111827',   
        },
        accent: {
          DEFAULT: '#10b981', 
          hover: '#059669',   
          light: '#34d399',   
        },
        secondary: {
          DEFAULT: '#10b981', 
          light: '#34d399',   
          dark: '#059669',    
        },
        background: {
          DEFAULT: '#030712',
          dark: '#000000',
          light: '#111827',
          card: 'rgba(0, 0, 0, 0.8)',
        },
        text: {
          primary: '#f9fafb',    
          secondary: '#e5e7eb',  
          accent: '#10b981',     
        },
        border: {
          DEFAULT: 'rgba(16, 185, 129, 0.1)',
          hover: 'rgba(16, 185, 129, 0.2)',   
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
