// src/components/Modal.jsx
import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-4">
        <button onClick={onClose} className="text-red-500 float-right">X</button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
