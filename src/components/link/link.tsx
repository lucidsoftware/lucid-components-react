import React from 'react';
import './link.scss';

interface Props {
    to: string;
    className?: string;
    text: string;
}

const Link = ({ to, text }: Props) => {
    return (<a className="link">{text}</a>);
};

export default Link;
