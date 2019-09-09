import React, { ReactNode } from 'react';
import './modal.scss';

interface Props {
  className?: string;
  header: string | ReactNode;
  body: string | ReactNode;
  actions: string | ReactNode;
  isOpen: boolean;
  onClose: () => {};
  onSuccess: () => {};
}

const Modal = ({ className, header, body }: Props) => {
  return (
    <div className="modal">
      {header}
      {body}
    </div>
  );
};

export default Modal;
