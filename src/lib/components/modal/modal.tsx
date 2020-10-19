import React, { ReactNode } from 'react';

interface Props {
  header: string | ReactNode;
  body: string | ReactNode;
  actions: string | ReactNode;
  isOpen: boolean;
  onClose: () => {};
  onSuccess: () => {};
}

const Modal = ({ header, body }: Props) => {
  return (
    <div className="modal">
      {header}
      {body}
    </div>
  );
};

export default Modal;
