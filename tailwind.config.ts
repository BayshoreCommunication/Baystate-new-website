import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1E3F',
          mid: '#162D5A',
          dark: '#06111F',
        },
        terracotta: {
          DEFAULT: '#B5634A',
          light: '#C97659',
        },
        warm: {
          white: '#F7F5F2',
          gray: '#E8E3DC',
        },
        gray: {
          mid: '#9B9B9B',
        },
        primary: {
          text: '#1A1A1A',
          muted: '#5A5A5A',
        },
      },
      fontFamily: {
        serif: ['var(--font-dm-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;

