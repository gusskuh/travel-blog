import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      fontFamily: {
        hebrew: ['var(--font-hebrew)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-hebrew)', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            direction: 'rtl',
            textAlign: 'right',
            h1: {
              direction: 'rtl',
              textAlign: 'right',
            },
            h2: {
              direction: 'rtl',
              textAlign: 'right',
            },
            h3: {
              direction: 'rtl',
              textAlign: 'right',
            },
            p: {
              direction: 'rtl',
              textAlign: 'right',
            },
            ul: {
              direction: 'rtl',
              textAlign: 'right',
            },
            ol: {
              direction: 'rtl',
              textAlign: 'right',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
