import React, { FC, ReactNode } from 'react';

export interface ModalProps {
  header: string | ReactNode;
  body: string | ReactNode;
  actions: string | ReactNode;
  isOpen: boolean;
  onClose: () => {};
  onSuccess: () => {};
}

const Modal: FC<ModalProps> = ({ header, body }) => {
  return (
    <div className="modal">
      {header}
      {body}
    </div>
  );
};

export default Modal;
