import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useSpring, animated } from '@react-spring/web';

const Modal = ({ isOpen, onClose, title, children }) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const modalStyle = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0)` : `translateY(-50px)`,
    config: { mass: 1, tension: 350, friction: 40 },
  });

  if (!showModal) return null;
  return (
    <animated.div style={modalStyle} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4">
          {children}
        </div>
      </div>
    </animated.div>
  );
};

export default Modal;
