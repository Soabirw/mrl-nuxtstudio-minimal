import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    theme: {
        extend: {
            colors: {
                'di-serria': {
                    50: '#fcf8f0',
                    100: '#f8eedc',
                    200: '#f0dab8',
                    300: '#e7c18a',
                    400: '#dda15e',
                    500: '#d5863a',
                    600: '#c66f30',
                    700: '#a55729',
                    800: '#844628',
                    900: '#6b3b23',
                    950: '#391c11'
                }
            }
        }
    }
}
