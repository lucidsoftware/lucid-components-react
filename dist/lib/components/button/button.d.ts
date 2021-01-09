import { FC, ReactNode, ButtonHTMLAttributes, RefAttributes, SyntheticEvent } from 'react';
import * as CSS from 'csstype';
import { ThemeProps } from '../../../theme/theme';
import { UnderlineType } from '../link/link';
export declare type ButtonSize = 'small' | 'regular' | 'large';
export interface CoreButtonProps {
    className?: string;
    id?: string;
    children?: ReactNode;
    primary?: boolean;
    secondary?: boolean;
    inverse?: boolean;
    asLink?: boolean;
    underline?: UnderlineType;
    block?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    hover?: boolean;
    active?: boolean;
    css?: CSS.Properties;
    onClick?: (evt: SyntheticEvent<Element, Event>) => void;
    onHover?: (evt: SyntheticEvent<Element, Event>) => void;
    onFocus?: (evt: SyntheticEvent<Element, Event>) => void;
    mouseOver?: (evt: SyntheticEvent<Element, Event>) => void;
}
export declare type ButtonProps = CoreButtonProps & ThemeProps & RefAttributes<HTMLButtonElement> & ButtonHTMLAttributes<HTMLButtonElement>;
export declare const getButtonStyles: ({ theme, variant, size, block, active, disabled }: {
    variant?: string | undefined;
    block?: boolean | undefined;
    size?: "small" | "large" | "regular" | undefined;
    active?: boolean | undefined;
    disabled?: boolean | undefined;
} & ThemeProps) => {
    display: string;
    width: string;
    textAlign: string;
    padding: any;
    fontSize: any;
    fontWeight: string;
    lineHeight: any;
    borderRadius: string | number;
    boxShadow: any;
    transition: any;
    textDecoration: string;
    color: string;
    backgroundColor: string;
    border: any;
    '&:visited': {
        color: string;
    };
    ':hover, :focus': {
        color?: undefined;
        backgroundColor?: undefined;
        border?: undefined;
        cursor?: undefined;
        boxShadow?: undefined;
        textDecoration?: undefined;
    } | {
        color: string;
        backgroundColor: string;
        border: any;
        cursor: string;
        boxShadow: any;
        textDecoration: string;
    };
};
declare const Button: FC<Pick<import("react").PropsWithChildren<ButtonProps>, "inverse" | "active" | "disabled" | "hidden" | "dir" | "form" | "slot" | "style" | "title" | "color" | "size" | "block" | "underline" | "translate" | "prefix" | "ref" | "children" | "key" | "className" | "primary" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "draggable" | "id" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "hover" | "secondary" | "css" | "type" | "asLink" | "onHover" | "mouseOver" | "autoFocus" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "name" | "value"> & {
    theme?: import("@emotion/react").Theme | undefined;
}>;
export default Button;
