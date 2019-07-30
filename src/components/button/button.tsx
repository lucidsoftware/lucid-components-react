import React, { ReactNode } from 'react';
import { Link } from 'gatsby';

import './button.scss';

interface Props {
    primary?: boolean;
    secondary?: boolean;
    inverse?: boolean;

    children?: ReactNode;

    disabled?: boolean;
    className?: string;

    href?: string;
    trackingTrigger?: string;
    type?: 'button' | 'submit' | 'reset';

    onClick?: () => void;
    onHover?: () => void;
    mouseOver?: () => void;
}

const Button = ({
    children,
    className = '',
    disabled,
    href,
    inverse,
    onClick,
    onHover,
    primary,
    secondary,
    type = 'button'
}: Props) => {
    const getClasses = () => {
        let style = 'default';
        if (primary) {
            style = 'is-primary';
        } else if (secondary) {
            style = 'is-secondary';
        }
        return `${className} ${style} ${disabled ? 'is-disabled' : ''} ${
            inverse ? 'is-inverse' : ''
            }`;
    };

    const styles = {
        fontSize: `16px`,
        fontWeight: '400'
    };

    if (href) {
        return <Link to={href}>{children}</Link>;
    }

    return (
        <button
            disabled={disabled}
            onClick={onClick}
            onMouseOver={onHover}
            type={type}
            className={getClasses()}
        >
            {children}
        </button>
    );
};

export default Button;
