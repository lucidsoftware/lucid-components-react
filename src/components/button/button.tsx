import React, { ReactNode } from "react";

interface Props {
  className?: string;
  id?: string;
  children?: ReactNode;

  primary?: boolean;
  secondary?: boolean;
  inverse?: boolean;
  asLink?: boolean;

  block?: boolean;

  disabled?: boolean;
  hover?: boolean;
  active?: boolean;

  type?: 'button' | 'submit' | 'reset';


  onClick?: () => void;
  onHover?: () => void;
  mouseOver?: () => void;
}

type Button = Props & React.HTMLProps<HTMLButtonElement> & React.HTMLAttributes<HTMLButtonElement>;

const Button = ({
  className="",
  id="",
  children,

  primary,
  secondary,
  inverse,
  asLink,

  block,

  onClick,
  onHover,

  disabled,
  hover,
  active,

  type = "button",
  ...rest
}: Button) => {
  const getClasses = () => {
    let emphasis = "default";
    if (primary) {
      emphasis = "is-primary";
    } else if (secondary) {
      emphasis = "is-secondary";
    }

    return `${className} ${emphasis}${inverse ? '-inverse' : ''}  ${disabled ? 'is-disabled' : ''}  ${hover ? 'is-hover' : ''} ${active ? 'is-active' : ''} ${asLink ? 'is-link' : ''} ${block ? 'block' : ''}`;
  };

  return (
    <button
      {...rest}
      className={getClasses()}
      disabled={disabled}
      onClick={onClick}
      onMouseOver={onHover}
      type={type}
      id={id}
    >
      {children}
    </button>
  );
};

export default Button;
