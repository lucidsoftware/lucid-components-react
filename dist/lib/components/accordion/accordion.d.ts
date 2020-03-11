/// <reference types="@emotion/core" />
import { Accordion as ReactAccordion } from 'react-accessible-accordion';
import { LayoutProps, BorderProps, SpaceProps } from 'styled-system';
import { VariantProps } from '../../../types';
interface Props extends BorderProps, LayoutProps, SpaceProps, VariantProps {
}
declare const Accordion: import("react").SFC<import("emotion-theming/types/helper").AddOptionalTo<import("react").PropsWithChildren<Pick<Pick<import("react-accessible-accordion/dist/types/helpers/types").DivAttributes, "hidden" | "dir" | "slot" | "style" | "title" | "color" | "translate" | "children" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "draggable" | "id" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "css"> & {
    preExpanded?: (string | number)[] | undefined;
    allowMultipleExpanded?: boolean | undefined;
    allowZeroExpanded?: boolean | undefined;
    onChange?(args: (string | number)[]): void;
} & import("react").RefAttributes<ReactAccordion>, "key" | "ref"> & Partial<Pick<Pick<import("react-accessible-accordion/dist/types/helpers/types").DivAttributes, "hidden" | "dir" | "slot" | "style" | "title" | "color" | "translate" | "children" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "draggable" | "id" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "css"> & {
    preExpanded?: (string | number)[] | undefined;
    allowMultipleExpanded?: boolean | undefined;
    allowZeroExpanded?: boolean | undefined;
    onChange?(args: (string | number)[]): void;
} & import("react").RefAttributes<ReactAccordion>, "hidden" | "dir" | "slot" | "style" | "title" | "color" | "translate" | "children" | "allowMultipleExpanded" | "allowZeroExpanded" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "draggable" | "id" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "css" | "preExpanded">> & Partial<Pick<Pick<import("react-accessible-accordion/dist/types/helpers/types").DivAttributes, "hidden" | "dir" | "slot" | "style" | "title" | "color" | "translate" | "children" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "draggable" | "id" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "css"> & {
    preExpanded?: (string | number)[] | undefined;
    allowMultipleExpanded?: boolean | undefined;
    allowZeroExpanded?: boolean | undefined;
    onChange?(args: (string | number)[]): void;
}, never>> & Props & {
    theme?: {
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
    } | undefined;
}>, "theme">> & {
    Panel: import("@emotion/styled-base").StyledComponent<Pick<import("react-accessible-accordion/dist/types/helpers/types").DivAttributes & import("react").RefAttributes<import("react-accessible-accordion").AccordionItemPanel>, "hidden" | "dir" | "slot" | "style" | "title" | "color" | "translate" | "key" | "ref" | "children" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "draggable" | "id" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "css"> & Partial<Pick<import("react-accessible-accordion/dist/types/helpers/types").DivAttributes & import("react").RefAttributes<import("react-accessible-accordion").AccordionItemPanel>, "className">> & Partial<Pick<{
        className: string;
    }, never>>, import("./accordion-panel").Props, {
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
    Item: import("@emotion/styled-base").StyledComponent<Pick<import("react-accessible-accordion/dist/types/helpers/types").DivAttributes & {
        uuid?: string | number | undefined;
    } & import("react").RefAttributes<import("react-accessible-accordion").AccordionItem>, "hidden" | "dir" | "slot" | "style" | "title" | "color" | "translate" | "key" | "ref" | "children" | "uuid" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "draggable" | "id" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "css"> & Partial<Pick<import("react-accessible-accordion/dist/types/helpers/types").DivAttributes & {
        uuid?: string | number | undefined;
    } & import("react").RefAttributes<import("react-accessible-accordion").AccordionItem>, "className">> & Partial<Pick<{
        className: string;
    }, never>>, import("./accordion-item").Props, {
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
    Heading: import("@emotion/styled-base").StyledComponent<import("react").PropsWithChildren<import("react-accessible-accordion/dist/types/helpers/types").DivAttributes>, import("./accordion-heading").Props, {
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
    Button: import("@emotion/styled-base").StyledComponent<import("react").PropsWithChildren<Pick<import("react-accessible-accordion/dist/types/helpers/types").DivAttributes, "hidden" | "dir" | "slot" | "style" | "title" | "color" | "translate" | "children" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "draggable" | "lang" | "placeholder" | "spellCheck" | "radioGroup" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-current" | "aria-describedby" | "aria-details" | "aria-dropeffect" | "aria-errormessage" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "css">>, import("./accordion-button").Props, {
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
};
export default Accordion;
