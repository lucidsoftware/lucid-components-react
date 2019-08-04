import React from 'react';
import './icon.scss';

enum IconType {
    ArrowRight,
    ArrowLeft
}

interface Props {
    type: IconType;
}

const Icon = ({ type }: Props) => {
    let icon;
    switch (type) {
        case IconType.ArrowRight:
            icon = <div>&rightarrow;</div>;
            break;
        default:
            icon = <svg></svg>;
            break;
    }

    return (<div className="icon">{icon}</div>);
};

export default Icon;
