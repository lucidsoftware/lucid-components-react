/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import './icon.scss';

enum IconType {
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
        width: '100%'
    });

    let icon;
    switch (type) {
        case IconType.ArrowRight:
            icon = <div>&rightarrow;</div>;
            break;
        case IconType.CarotRight:
            icon = <div>&gt;</div>;
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
