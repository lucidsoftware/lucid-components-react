/** @jsx jsx */
import { jsx, css } from '@emotion/core'

export enum IconType {
    ArrowRight,
    ArrowLeft,
    CarotRight,
    CarotDown,
    Play
}

interface Props {
    className?: string;
    type: IconType;
}

const Icon = ({ className, type }: Props) => {
    const iconCss = css({
        height: '100%',
        width: '100%',
        position: 'relative'
    });

    let icon;
    switch (type) {
        case IconType.ArrowRight:
            icon = <svg version="1.1" x="0px" y="0px"
                viewBox="0 0 24.7 39.2">
                <polyline style={{
                    fill: 'none',
                    stroke: '#CCCCCC',
                    strokeWidth: 7,
                    strokeMiterlimit: 10
                }} points="2.5,2.5 19.7,19.5 2.5,36.7 " />
            </svg>;
            break;
        case IconType.CarotRight:
            icon = <svg version="1.1" x="0px" y="0px"
                viewBox="0 0 24.7 39.2">
                <polyline style={{
                    fill: 'none',
                    stroke: '#CCCCCC',
                    strokeWidth: 7,
                    strokeMiterlimit: 10
                }} points="2.5,2.5 19.7,19.5 2.5,36.7 " />
            </svg>;
            break;
        case IconType.CarotDown:
            icon = <div style={{transform: 'rotate(90deg)'}}>&gt;</div>;
            break;
        default:
            icon = <svg></svg>;
            break;
    }

    return (<div css={iconCss} className={className}>{icon}</div>);
};

export default Icon;
