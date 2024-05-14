import type { Config } from 'tailwindcss'
import tailwindTypography from '@tailwindcss/typography'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindAnimate from 'tailwindcss-animate'
import defaultTheme from 'tailwindcss/defaultTheme'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: {
          0: '#fff',
        },
        gray: {
          100: '#f5f5f7',
          300: '#333',
        },
      },
    },
  },
  plugins: [tailwindTypography(), tailwindAnimate],
} satisfies Config

export default config

export const tailwindConfig = resolveConfig(config)
