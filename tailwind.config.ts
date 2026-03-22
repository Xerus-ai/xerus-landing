import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          base: '#FBF7F1',
          surface: '#F5F0EB',
          hover: '#EAE4DC',
          active: '#E5E0DA',
        },
        text: {
          primary: '#2D2D2D',
          secondary: '#6E6E6E',
          muted: '#999999',
        },
        accent: {
          DEFAULT: '#FF6600',
          hover: '#E65C00',
        },
      },
      fontFamily: {
        heading: ['var(--font-lora)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'heading-hero': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'heading-section': ['48px', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
        'heading-card': ['24px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'subheading': ['20px', { lineHeight: '1.5', letterSpacing: '-0.01em', fontWeight: '500' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-small': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'label': ['10px', { lineHeight: '1', letterSpacing: '0.1em', fontWeight: '600' }],
        'button': ['15px', { lineHeight: '1', letterSpacing: '-0.01em', fontWeight: '500' }],
        'card-title': ['14px', { lineHeight: '1.4', fontWeight: '600' }],
        'card-desc': ['13px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      borderRadius: {
        card: '24px',
        button: '99px',
        input: '16px',
        icon: '16px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.06)',
        'cta-glow': '0 4px 24px rgba(255,102,0,0.2)',
        screenshot: '0 20px 60px rgba(0,0,0,0.08)',
        'screenshot-deep': '0 30px 80px rgba(0,0,0,0.10)',
      },
      maxWidth: {
        content: '1200px',
      },
      spacing: {
        'section': '96px',
        'section-lg': '128px',
      },
      animation: {
        blob: 'blob 7s ease-in-out infinite',
        'blob-delayed-2': 'blob 7s ease-in-out 2s infinite',
        'blob-delayed-4': 'blob 7s ease-in-out 4s infinite',
        float: 'float 4s ease-in-out infinite',
        drift: 'drift 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 3s ease-out infinite',
        'fade-cycle': 'fade-cycle 4s ease-in-out infinite',
        'file-marquee': 'file-marquee 20s linear infinite',
        'blink-cursor': 'blink-cursor 1s step-end infinite',
        'typing-reveal': 'typing-reveal 2.5s steps(40, end) forwards',
        'slide-in-left': 'slide-in-left 0.5s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(8px, -6px)' },
          '50%': { transform: 'translate(-4px, 8px)' },
          '75%': { transform: 'translate(6px, 4px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.5)', opacity: '0.8' },
          '100%': { transform: 'scale(2.5)', opacity: '0' },
        },
        'fade-cycle': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        'file-marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'blink-cursor': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'typing-reveal': {
          '0%': { maxWidth: '0' },
          '100%': { maxWidth: '100%' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'marquee-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
