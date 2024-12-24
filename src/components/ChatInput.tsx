import React, { useState, useRef } from 'react';
import { VoiceIcon, SendIcon } from './icons';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  onStartRecording: () => void;
  onStopRecording: () => void;
  isRecording: boolean;
  disabled?: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  onSendMessage,
  onStartRecording,
  onStopRecording,
  isRecording,
  disabled
}) => {
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-stretch gap-2 p-4 bg-white border-t border-gray-200 h-[76px]">
      <textarea
        ref={inputRef}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type your message..."
        className="flex-1 resize-none rounded-lg border border-gray-200 bg-[#F4EFED] text-gray-800 px-3 focus:outline-none focus:ring-2 focus:ring-[#D3A74F] h-[44px] placeholder-gray-400 leading-[44px] overflow-hidden"
        rows={1}
        disabled={disabled}
      />
      <button
        type="submit"
        className="w-12 rounded-lg flex items-center justify-center bg-[#D3A74F] text-white hover:bg-[#c49a47] transition-colors disabled:opacity-50"
        disabled={!message.trim() || disabled}
      >
        <SendIcon />
      </button>
      <button
        type="button"
        onClick={isRecording ? onStopRecording : onStartRecording}
        className={`w-12 rounded-lg flex items-center justify-center ${
          isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-black hover:bg-gray-900'
        } text-[#F4EFED] transition-colors disabled:opacity-50`}
        disabled={disabled}
      >
        <VoiceIcon />
      </button>
    </form>
  );
};