import React, { ReactNode } from 'react';

import './card.module.scss';

interface Props {
    children: ReactNode;
    isRaised?: boolean;
    isInteractive?: boolean;
}
const Card = ({ children, isRaised = false, isInteractive = false }: Props) => {
    const classes = `card ${isRaised ? 'card--raised' : 'card--interactive'} ${
        isInteractive ? 'card--interactive' : ''
        }`;
    return (
        <div>
            <div>{children}</div>
        </div>
    );
};

export default Card;
