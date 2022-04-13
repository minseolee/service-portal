// eslint-disable-next-line @typescript-eslint/no-var-requires,import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const screens = require('./src/styles/screens');

module.exports = {
    content: [],
    theme: {
        fontFamily: {
            sans: ['Pretendard', ...defaultTheme.fontFamily.sans],
            serif: ['Work Sans', ...defaultTheme.fontFamily.serif],
        },
        fontSize: {
            sm: ['14px', { lineHeight: '1.4', letterSpacing: '-0.04em' }],
            md: ['16px', { lineHeight: '1', letterSpacing: '-0.02em' }],
            lg: ['17px', { lineHeight: '1.4', letterSpacing: '0' }],
            xl: ['19px', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
            '2xl': ['24px', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
            '3xl': ['32px', { lineHeight: '1.2', letterSpacing: '-0.04em' }],
            '4xl': ['40px', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
            '5xl': ['48px', { lineHeight: '1.2', letterSpacing: '-0.04em' }],
            '6xl': ['56px', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
            '7xl': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        },
        screens: {
            desktop: { min: `${screens.desktop.min}px` },
            laptop: { min: `${screens.laptop.min}px`, max: `${screens.laptop.max}px` },
            tablet: { min: `${screens.tablet.min}px`, max: `${screens.tablet.max}px` },
            mobile: { max: `${screens.mobile.max}px` },
        },
        colors: {
            primary: '#6638B6',
            violet: {
                100: '#F8F8FC',
                200: '#A9A6CE',
                300: '#8C81D1',
                400: '#6638B6',
                500: '#3C2C84',
            },
            gray: {
                100: '#F6F6F6',
                200: '#D8D8D8',
                300: '#A3A3A3',
                400: '#86868B',
                500: '#484848',
                600: '#1D1D1F',
            },
            white: '#FFFFFF',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
