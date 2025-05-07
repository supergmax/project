import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'warm-white': '#F5F5F0',
        'light-brown': '#D4C5B2',
        'navy-blue': '#1B365D',
        'charcoal': '#36454F',
        'soft-beige': '#E8DFD0',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('daisyui')],
  daisyui: {
    themes: [
      {
        "caba-light": {
          "color-scheme": "light",
          "primary": "#CABA9F",
          "primary-content": "#2F2C2C",
          "secondary": "#AA271D",
          "secondary-content": "#ffffff",
          "accent": "#009BD9",
          "accent-content": "#ffffff",
          "neutral": "#4D453E",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-content": "#2F2C2C",
          "info": "#009BD9",
          "info-content": "#ffffff",
          "success": "#008065",
          "success-content": "#ffffff",
          "warning": "#FFC000",
          "warning-content": "#2F2C2C",
          "error": "#AA271D",
          "error-content": "#ffffff",
        },
      },
      {
        "caba-dark": {
          "color-scheme": "dark",
          "primary": "#4D453E",
          "primary-content": "#CABA9F",
          "secondary": "#AA271D",
          "secondary-content": "#ffffff",
          "accent": "#009BD9",
          "accent-content": "#ffffff",
          "neutral": "#CABA9F",
          "neutral-content": "#2F2C2C",
          "base-100": "#2F2C2C",
          "base-content": "#CABA9F",
          "info": "#009BD9",
          "info-content": "#2F2C2C",
          "success": "#008065",
          "success-content": "#2F2C2C",
          "warning": "#FFC000",
          "warning-content": "#2F2C2C",
          "error": "#AA271D",
          "error-content": "#ffffff",
        },
      },
    ],
  },
  
};

export default config;