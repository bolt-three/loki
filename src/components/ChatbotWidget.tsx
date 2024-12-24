import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import { ChatbotButton } from './ChatbotButton';

export const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="fixed inset-0 md:relative md:inset-auto">
          <div className="absolute inset-0 md:relative md:inset-auto md:w-[399px] md:h-[639px] bg-[#1A1A1A] rounded-none md:rounded-2xl shadow-2xl transition-all duration-300 ease-in-out">
            <ChatWindow onClose={() => setIsOpen(false)} />
          </div>
        </div>
      ) : (
        <ChatbotButton onClick={() => setIsOpen(true)} />
      )}
    </div>
  );
};