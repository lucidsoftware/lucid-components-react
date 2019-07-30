import React from 'react';

interface Props {
	primary?: boolean,
	secondary?: boolean,
	inverse?: boolean,
	asButton?: boolean
}

type Link = Props & React.HTMLProps<HTMLAnchorElement> & React.HTMLAttributes<HTMLAnchorElement>;

const Link = ({ children, primary, secondary, inverse, asButton, ...rest }: Link) => {
    return (
		<a {...rest}>
			{children}
		</a>
	);
};

export default Link;
