const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: ['./src/**/*.js'],
    darkMode: false,
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans]
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}