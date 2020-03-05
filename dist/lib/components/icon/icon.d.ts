export declare enum IconType {
    ArrowRight = 0,
    CarotRight = 1,
    CarotDown = 2,
    Checkmark = 3,
    Play = 4,
    RSS = 5
}
declare type Flip = 'vertical' | 'horizontal' | 'both';
declare type Sizing = 'auto' | 'responsive';
interface Props {
    className?: string;
    type: IconType;
    color?: string;
    hoverColor?: string;
    flip?: Flip;
    rotation?: number;
    sizing?: Sizing;
}
declare const Icon: ({ className, type, color, hoverColor, sizing, flip }: Props) => JSX.Element;
export default Icon;
