"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const primary = '#636AFF';
const white = '#FFFFFF';
const black = '#FFFFFF';
const blueSteel = '#3D4752';
const theme = {
    colors: {
        heading: blueSteel,
        text: blueSteel,
        background: white,
        primary,
        primaryText: primary,
        secondary: blueSteel,
        secondaryText: blueSteel,
        grey: '#EBEBEC',
        white,
        black,
        disabled: '#EBEBEC',
        disabledBorder: '#A7A9AC'
    },
    breadcrumb: {
        color: blueSteel,
        inverseColor: white,
        margin: '0 6px',
        crumbOpacity: 0.45
    },
    links: {
        default: {
            default: {
                color: blueSteel,
                hover: blueSteel,
                disabled: blueSteel
            },
            inverse: {
                color: white,
                hover: white,
                disabled: white
            }
        },
        primary: {
            default: {
                color: primary,
                hover: primary,
                disabled: primary
            },
            inverse: {
                color: white,
                hover: white,
                disabled: white
            }
        },
        secondary: {
            default: {
                color: primary,
                hover: primary,
                disabled: primary
            },
            inverse: {
                color: white,
                hover: white,
                disabled: white
            }
        }
    },
    buttons: {
        fontSize: '1em',
        lineHeight: '1',
        boxShadow: '2px 2px 0 0 rgba(0, 0, 0, .2)',
        hoverBoxShadow: 'none',
        border: '1px solid #000',
        transition: 'transform 0.15 ease-out',
        primary: {
            color: '#FFF',
            border: '1px solid #636AFF',
            backgroundColor: '#636AFF',
            hoverColor: '#4247aa',
            hoverBackgroundColor: '#B6B9FF',
            hoverBorder: '1px solid #636AFF',
            activeColor: '#4247aa',
            activeBackgroundColor: '#B6B9FF',
            activeBorder: '1px solid #636AFF',
            activeTransform: 0.95
        },
        secondary: {
            color: '#636AFF',
            border: '1px solid #636AFF',
            backgroundColor: '#FFF',
            hoverColor: '#4247aa',
            hoverBackgroundColor: '#B6B9FF',
            hoverBorder: '1px solid #636AFF',
            activeTransform: 0.95
        }
    },
    paper: {
        padding: '40px'
    },
    card: {
        padding: '40px',
        raised: {
            boxShadow: '20px 20px 0 0 rgba(0,0,0,.3)'
        },
        interactive: {
            boxShadow: '10px 10px 0 0 rgba(0,0,0,.2)',
            boxShadowHover: '20px 20px 0 0 rgba(0,0,0,.3)'
        }
    },
    fonts: {
        body: 'BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
        heading: 'BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
        monospace: 'monospace'
    },
    fontWeights: {
        body: 400,
        bold: 500,
        bolder: 600,
        heading: 700
    },
    lineHeights: {
        body: 1.35,
        heading: 1.125
    },
    fontSizes: [
        18,
        19,
        21,
        22,
        24,
        26,
        28,
        32,
        36,
        40,
        46,
        53,
        56,
        66,
        48,
        64,
        72
    ],
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    breakpoints: [320, 500, 768, 900, 1024, 1220, 1440],
    borderRadius: 5
};
exports.default = theme;
