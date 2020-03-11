/// <reference types="@emotion/core" />
import { LayoutProps, SpaceProps, BorderProps } from 'styled-system';
interface Props extends LayoutProps, SpaceProps, BorderProps {
}
declare const Spacer: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Props, {
    colors: {
        text: string;
        background: string;
        heading: string;
        primary: string;
        secondary: string;
        accent: string;
        muted: string;
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
    accordion: {
        button: {
            default: {
                paddingTop: number;
                paddingBottom: number;
                paddingLeft: number;
                paddingRight: number;
                borderBottomWidth: string;
                borderBottomColor: string;
                borderBottomStyle: string;
                '&:hover, &:focus': {
                    borderBottomColor: string;
                };
                '&[aria-expanded="true"]': {
                    borderBottomColor: string;
                };
            };
            inverse: {
                paddingTop: number;
                paddingBottom: number;
                paddingLeft: number;
                paddingRight: number;
                borderBottomWidth: string;
                borderBottomColor: string;
                borderBottomStyle: string;
                '&:hover, &:focus': {
                    borderBottomColor: string;
                    backgroundColor: string;
                };
                '&[aria-expanded="true"]': {
                    borderBottomColor: string;
                };
                backgroundColor: string;
                color: string;
            };
        };
        panel: {
            default: {
                backgroundColor: string;
                paddingTop: number;
                paddingRight: number;
                paddingBottom: number;
                paddingLeft: number;
                borderBottomWidth: string;
                borderBottomColor: string;
                borderBottomStyle: string;
                color: string;
            };
            inverse: {
                paddingTop: number;
                paddingRight: number;
                paddingBottom: number;
                paddingLeft: number;
                borderBottomWidth: string;
                borderBottomColor: string;
                borderBottomStyle: string;
                backgroundColor: string;
                color: string;
            };
        };
    };
    forms: {
        select: {
            backgroundColor: string;
            border: string;
            borderRadius: string;
            color: string;
            floatingLabel: {
                paddingTop: string;
            };
            focus: {
                borderColor: string;
                labelColor: string;
            };
            fontSize: string;
            fontSizeSmall: string;
            height: string;
            outline: string;
            padding: string;
        };
    };
    breadcrumb: {
        color: string;
        inverseColor: string;
        margin: string;
        crumbOpacity: number;
    };
    buttons: {
        fontSize: string;
        lineHeight: string;
        boxShadow: string;
        hoverBoxShadow: string;
        border: string;
        transition: string;
        sizes: {
            small: {
                padding: string;
            };
            regular: {
                padding: string;
            };
            large: {
                padding: string;
            };
        };
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
        padding: string;
        raised: {
            boxShadow: string;
        };
        interactive: {
            boxShadow: string;
            boxShadowHover: string;
        };
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
    paper: {
        padding: string;
        default: {
            background: string;
            borderRadius: string;
            border: string;
            boxShadow: string;
        };
        raised: {
            background: string;
            borderRadius: string;
            border: string;
            boxShadow: string;
        };
    };
    headings: {
        heading: {
            color: string;
        };
        subheading: {
            color: string;
        };
    };
    fonts: {
        body: string;
        heading: string;
        monospace: string;
    };
    fontWeights: {
        body: number;
        heading: number;
        bold: number;
        bolder: number;
    };
    lineHeights: {
        default: number;
        body: number;
        heading: number;
    };
    letterSpacings: {
        body: string;
        heading: string;
    };
    fontSizes: number[];
    borderRadius: number;
    space: number[];
    breakpoints: string[];
    zIndices: number[];
}>;
export default Spacer;
