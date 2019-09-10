import Card from './components/card/card';
import Paper from './components/paper/paper';
import Button from './components/button/button';
import Breadcrumb from './components/breadcrumb/breadcrumb';
import Icon, { IconType } from './components/icon/icon';
import Link from './components/link/link';
import VideoPlayer from './components/video-player/video-player';
import VideoPlayButton from './components/video-play-button/video-play-button';
import { ThemeInterface } from '../theme/theme';
declare const helpers: {
    getLinkStyles: ({ block, inverse, theme, underline, variant }: {
        block?: boolean;
        inverse?: boolean;
        theme: {
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
        underline: string;
        variant: import("./components/link/link").LinkVariant;
    }) => {
        color: string;
        display: string;
        fontSize: string;
        border: string;
        textDecoration: string;
        cursor: string;
        ':visited': {
            color: string;
        };
        ':hover,:focus': {
            color: string;
            textDecoration: string;
        };
        'a&:not([href])': {
            color: string;
            cursor: string;
        };
    };
    getButtonStyles: ({ theme, variant, block }: {
        theme: {
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
        variant: string;
        block?: boolean;
    }) => {
        display: string;
        padding: string;
        fontSize: string;
        fontWeight: number;
        lineHeight: string;
        borderRadius: string;
        boxShadow: string;
        transition: string;
        textDecoration: string;
        color: string;
        backgroundColor: string;
        border: string;
        '&:visited': {
            color: string;
        };
        ':hover,:focus': {
            color: string;
            backgroundColor: string;
            border: string;
            cursor: string;
            boxShadow: string;
            textDecoration: string;
        };
    };
};
export { Breadcrumb, Button, Card, Icon, IconType, Link, Paper, ThemeInterface, VideoPlayButton, VideoPlayer, helpers };
