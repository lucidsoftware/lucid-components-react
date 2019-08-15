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
    buttons: {
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
    card: {
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
export interface ThemeInterface {
    colors: {
        [key: string]: string;
    };
    buttons: any;
    card: {
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
}
export interface ThemeProps {
    theme: ThemeInterface;
}
export default theme;
