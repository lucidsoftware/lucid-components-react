/// <reference types="@emotion/core" />
/** @jsx jsx */
import { ReactNode } from 'react';
import { ThemeProps } from '../../../theme/theme';
interface Props {
    as?: 'div' | 'section' | 'article';
    children?: ReactNode;
    className?: string;
    horizontal?: boolean;
    isInteractive?: boolean;
    isRaised?: boolean;
    theme: any;
}
declare const Card: import("react").FunctionComponent<import("emotion-theming/types/helper").AddOptionalTo<Props & ThemeProps & import("react").RefAttributes<HTMLDivElement>, "theme">> & {
    Action: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "hidden" | "dir" | "slot" | "style" | "title" | "color" | "children" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "draggable" | "id" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "css">, {
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
    Actions: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "hidden" | "dir" | "slot" | "style" | "title" | "color" | "children" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "draggable" | "id" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "css">, {
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
    Content: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("./card-content").CardContentProps, {
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
    Image: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "hidden" | "dir" | "slot" | "style" | "title" | "color" | "children" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "draggable" | "id" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "css">, {
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
    Title: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "hidden" | "dir" | "slot" | "style" | "title" | "color" | "children" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "draggable" | "id" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "css">, {
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
    Subtitle: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "hidden" | "dir" | "slot" | "style" | "title" | "color" | "children" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "draggable" | "id" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "css">, {
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
};
export default Card;
