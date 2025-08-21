/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          50: '#EEF2FF',
          600: '#4F46E5',
          700: '#4338CA',
        },
        accent: {
          blue: '#3B82F6',
          purple: '#8B5CF6',
          orange: '#F59E0B',
          red: '#EF4444',
          green: '#10B981',
        },
        slate: {
          50: '#F8FAFC',
          200: '#E2E8F0',
          400: '#94A3B8',
          500: '#64748B',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      maxWidth: {
        'container': '1280px',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #4F46E5 0%, #8B5CF6 100%)',
        'gradient-hero': 'linear-gradient(135deg, #3B82F6 0%, #6366F1 50%, #8B5CF6 100%)',
        'gradient-feature': 'linear-gradient(145deg, #F8FAFC 0%, #EEF2FF 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'planetPulse': 'planetPulse 3s ease-in-out infinite',
        'connectionPulse': 'connectionPulse 4s ease-in-out infinite',
        'floatingPost': 'floatingPost 8s ease-in-out infinite',
        'floatingPost2': 'floatingPost2 10s ease-in-out infinite',
        'floatingPost3': 'floatingPost3 12s ease-in-out infinite',
        'hubPulse': 'hubPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        planetPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.1)', opacity: '1' },
        },
        connectionPulse: {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.3' },
        },
        floatingPost: {
          '0%': { transform: 'translate(0, 0)', opacity: '0' },
          '10%': { opacity: '1' },
          '25%': { transform: 'translate(-200px, -50px)' },
          '50%': { transform: 'translate(-400px, -100px)' },
          '75%': { transform: 'translate(-600px, -50px)' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translate(-800px, 0)', opacity: '0' },
        },
        floatingPost2: {
          '0%': { transform: 'translate(0, 0)', opacity: '0' },
          '10%': { opacity: '1' },
          '25%': { transform: 'translate(150px, -100px)' },
          '50%': { transform: 'translate(300px, -200px)' },
          '75%': { transform: 'translate(450px, -150px)' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translate(600px, -50px)', opacity: '0' },
        },
        floatingPost3: {
          '0%': { transform: 'translate(0, 0)', opacity: '0' },
          '10%': { opacity: '1' },
          '25%': { transform: 'translate(-100px, 50px)' },
          '50%': { transform: 'translate(-250px, 100px)' },
          '75%': { transform: 'translate(-400px, 50px)' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translate(-500px, 0)', opacity: '0' },
        },
        hubPulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-bg-patterns'),
  ],
}