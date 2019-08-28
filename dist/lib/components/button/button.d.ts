/// <reference types="@emotion/core" />
import { ReactNode } from "react";
import { ThemeProps } from '../../../theme/theme';
import { ThemeInterface } from "../../../theme/theme";
import { UnderlineType } from '../link/link';
interface Props {
    className?: string;
    id?: string;
    children?: ReactNode;
    primary?: boolean;
    secondary?: boolean;
    inverse?: boolean;
    asLink?: boolean;
    underline?: UnderlineType;
    block?: boolean;
    disabled?: boolean;
    hover?: boolean;
    active?: boolean;
    type?: 'button' | 'submit' | 'reset';
    css?: any;
    theme: ThemeInterface;
    onClick?: () => void;
    onHover?: () => void;
    mouseOver?: () => void;
}
export declare const getButtonStyles: (theme: {
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
}, variant?: string) => {
    padding: string;
    fontSize: string;
    fontWeight: number;
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
    '&:hover': {
        color: string;
        backgroundColor: string;
        border: string;
        cursor: string;
        boxShadow: string;
    };
};
declare const Button: import("react").FunctionComponent<import("emotion-theming/types/helper").AddOptionalTo<Pick<import("react").PropsWithChildren<Props & ThemeProps & import("react").ClassAttributes<HTMLButtonElement> & import("react").ButtonHTMLAttributes<HTMLButtonElement>>, "inverse" | "active" | "disabled" | "hidden" | "dir" | "form" | "slot" | "style" | "title" | "color" | "block" | "underline" | "key" | "children" | "theme" | "className" | "onClick" | "type" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "draggable" | "id" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "inputMode" | "is" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "css" | "hover" | "primary" | "secondary" | "asLink" | "onHover" | "mouseOver" | "autoFocus" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "name" | "value"> & {
    ref?: ((instance: HTMLButtonElement) => void) | import("react").RefObject<HTMLButtonElement>;
}, "theme">>;
export default Button;
