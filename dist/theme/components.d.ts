export declare const navbar: {
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
export declare const accordion: {
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
export declare const forms: {
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
export declare const breadcrumb: {
    color: string;
    inverseColor: string;
    margin: string;
    crumbOpacity: number;
};
export declare const buttons: {
    fontSize: string;
    lineHeight: string;
    boxShadow: string;
    hoverBoxShadow: string;
    disabledBoxShadow: string;
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
    disabledColor: string;
    disabledBackgroundColor: string;
    disabledBorder: string;
};
export declare const card: {
    default: {
        background: string;
        flexDirection: string;
        borderRadius: string;
        border: string;
        borderColor: string;
    };
    interactive: {
        background: string;
        flexDirection: string;
        borderRadius: string;
        border: string;
        borderColor: string;
        boxShadow: string;
        transition: string;
        cursor: string;
        '&:hover, &:focus': {
            textDecoration: string;
            boxShadow: string;
            borderColor: string;
        };
        '&:focus': {
            outline: string;
        };
        '&:active': {
            transform: string;
            boxShadow: string;
        };
    };
    raised: {
        background: string;
        flexDirection: string;
        borderRadius: string;
        border: string;
        borderColor: string;
        boxShadow: string;
    };
};
export declare const links: {
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
export declare const paper: {
    default: {
        background: string;
        border: string;
        borderColor: string;
        borderRadius: string;
        padding: string;
    };
    raised: {
        background: string;
        border: string;
        borderColor: string;
        borderRadius: string;
        boxShadow: string;
        padding: string;
    };
};
export declare const headings: {
    heading: {
        color: string;
    };
    subheading: {
        color: string;
    };
};
