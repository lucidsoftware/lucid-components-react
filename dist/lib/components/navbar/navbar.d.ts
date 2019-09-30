/// <reference types="@emotion/core" />
/** @jsx jsx */
import { ReactNode } from 'react';
import { ThemeProps } from '../../../theme/theme';
interface Props {
    as?: 'nav' | 'header' | 'div';
    skipText?: string;
    sticky?: boolean;
    stickyCollapsed?: boolean;
    background?: string;
    children?: ReactNode;
}
export declare const navbarItemCollapsed: (props: any) => {
    margin: string;
};
export declare const NavbarContext: import("react").Context<{
    expanded: boolean;
    toggleExpanded: () => void;
}>;
declare const Navbar: import("react").FunctionComponent<import("emotion-theming/types/helper").AddOptionalTo<Props & ThemeProps & import("react").RefAttributes<HTMLDivElement>, "theme">> & {
    Brand: import("react").FunctionComponent<import("emotion-theming/types/helper").AddOptionalTo<ThemeProps & import("react").AnchorHTMLAttributes<HTMLAnchorElement> & import("react").HTMLAttributes<HTMLSpanElement> & import("react").RefAttributes<HTMLDivElement>, "theme">>;
    Border: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("./navbar-border").NavbarBorderProps, {
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
    }>;
    InnerContainer: import("react").FunctionComponent<import("emotion-theming/types/helper").AddOptionalTo<import("./navbar-inner-container").NavbarInnerContainerProps & ThemeProps & import("react").HTMLAttributes<HTMLOListElement> & import("react").RefAttributes<HTMLOListElement>, "theme">>;
    Container: import("react").FunctionComponent<import("emotion-theming/types/helper").AddOptionalTo<import("./navbar-container").NavbarContainerProps & ThemeProps & import("react").RefAttributes<HTMLDivElement>, "theme">>;
    Dropdown: import("react").FunctionComponent<import("emotion-theming/types/helper").AddOptionalTo<Pick<import("./navbar-dropdown").NavbarDropdownProps & ThemeProps & import("react").HTMLProps<HTMLDivElement>, "max" | "required" | "low" | "high" | "disabled" | "default" | "start" | "open" | "media" | "hidden" | "cite" | "data" | "dir" | "form" | "label" | "slot" | "span" | "style" | "summary" | "title" | "pattern" | "toggle" | "async" | "defer" | "manifest" | "color" | "content" | "size" | "wrap" | "multiple" | "height" | "width" | "key" | "children" | "list" | "step" | "theme" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "draggable" | "id" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "inputMode" | "is" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "css" | "as" | "href" | "download" | "hrefLang" | "rel" | "target" | "type" | "autoFocus" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "name" | "value" | "accept" | "acceptCharset" | "action" | "allowFullScreen" | "allowTransparency" | "alt" | "autoComplete" | "autoPlay" | "capture" | "cellPadding" | "cellSpacing" | "charSet" | "challenge" | "checked" | "classID" | "cols" | "colSpan" | "controls" | "coords" | "crossOrigin" | "dateTime" | "encType" | "frameBorder" | "headers" | "htmlFor" | "httpEquiv" | "integrity" | "keyParams" | "keyType" | "kind" | "loop" | "marginHeight" | "marginWidth" | "maxLength" | "mediaGroup" | "method" | "min" | "minLength" | "muted" | "nonce" | "noValidate" | "optimum" | "playsInline" | "poster" | "preload" | "readOnly" | "reversed" | "rows" | "rowSpan" | "sandbox" | "scope" | "scoped" | "scrolling" | "seamless" | "selected" | "shape" | "sizes" | "src" | "srcDoc" | "srcLang" | "srcSet" | "useMap" | "wmode"> & import("react").RefAttributes<HTMLDivElement>, "theme">>;
    Item: import("react").FunctionComponent<import("emotion-theming/types/helper").AddOptionalTo<ThemeProps & import("react").RefAttributes<HTMLLIElement>, "theme">>;
    Toggle: import("react").FunctionComponent<import("emotion-theming/types/helper").AddOptionalTo<ThemeProps & import("react").HTMLAttributes<HTMLButtonElement> & import("react").RefAttributes<HTMLButtonElement>, "theme">>;
};
export default Navbar;
