declare const theme: {
    colors: {
        heading: string;
        text: string;
        background: string;
        primary: string;
        primaryText: string;
        secondary: string;
        secondaryText: string;
        grey: string;
        white: string;
        black: string;
        disabled: string;
        disabledBorder: string;
    };
    navbar: {
        background: string;
        collapseAt: string;
        minHeight: string;
        logoHeight: string;
        itemSpacing: string;
        padding: string;
        borderColor: string;
        borderWidth: string;
        borderOffset: string;
        dropdown: {
            padding: string;
            mobilePadding: string;
            background: string;
            backgroundHover: string;
            border: string;
            borderRadius: string;
        };
    };
    breadcrumb: {
        color: string;
        inverseColor: string;
        margin: string;
        crumbOpacity: number;
    };
    links: {
        default: {
            default: {
                color: string;
                hover: string;
                disabled: string;
            };
            inverse: {
                color: string;
                hover: string;
                disabled: string;
            };
        };
        primary: {
            default: {
                color: string;
                hover: string;
                disabled: string;
            };
            inverse: {
                color: string;
                hover: string;
                disabled: string;
            };
        };
        secondary: {
            default: {
                color: string;
                hover: string;
                disabled: string;
            };
            inverse: {
                color: string;
                hover: string;
                disabled: string;
            };
        };
    };
    buttons: {
        fontSize: string;
        lineHeight: string;
        boxShadow: string;
        hoverBoxShadow: string;
        border: string;
        transition: string;
        primary: {
            color: string;
            border: string;
            backgroundColor: string;
            hoverColor: string;
            hoverBackgroundColor: string;
            hoverBorder: string;
            activeColor: string;
            activeBackgroundColor: string;
            activeBorder: string;
            activeTransform: number;
        };
        secondary: {
            color: string;
            border: string;
            backgroundColor: string;
            hoverColor: string;
            hoverBackgroundColor: string;
            hoverBorder: string;
            activeTransform: number;
        };
    };
    paper: {
        padding: string;
    };
    card: {
        padding: string;
        raised: {
            boxShadow: string;
        };
        interactive: {
            boxShadow: string;
            boxShadowHover: string;
        };
    };
    fonts: {
        body: string;
        heading: string;
        monospace: string;
    };
    fontWeights: {
        body: number;
        bold: number;
        bolder: number;
        heading: number;
    };
    lineHeights: {
        body: number;
        heading: number;
    };
    fontSizes: number[];
    space: number[];
    breakpoints: number[];
    borderRadius: number;
};
declare type Theme = typeof theme;
export interface ThemeProps {
    theme: Theme;
}
export default theme;
