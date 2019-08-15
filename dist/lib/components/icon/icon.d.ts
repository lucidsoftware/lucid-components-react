/// <reference types="react" />
import './icon.scss';
declare enum IconType {
    ArrowRight = 0,
    ArrowLeft = 1,
    CarotRight = 2,
    CarotDown = 3,
    Play = 4
}
interface Props {
    className?: string;
    type: IconType;
}
declare const Icon: ({ className, type }: Props) => JSX.Element;
export default Icon;
