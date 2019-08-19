/// <reference types="react" />
export declare enum IconType {
    ArrowRight = 0,
    CarotRight = 1,
    CarotDown = 2,
    Checkmark = 3,
    Play = 4
}
interface Props {
    className?: string;
    type: IconType;
    color?: string;
    hoverColor?: string;
    isHover?: boolean;
}
declare const Icon: ({ className, type, color, hoverColor, isHover }: Props) => JSX.Element;
export default Icon;
