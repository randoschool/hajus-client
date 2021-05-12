module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    mode: 'jit',
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            gridTemplateColumns: {
                'auto-fill': 'repeat(auto-fill, minmax(16rem, auto))',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
