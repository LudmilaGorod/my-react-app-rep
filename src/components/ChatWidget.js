import React, { useState, useEffect, useRef } from 'react';
import './ChatWidget.css'; // Подключаем стили

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const chatRef = useRef(null); // Создаем реф для чата

  // Функция для открытия и закрытия чата
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Закрываем чат, если клик произошел вне его области
  const handleClickOutside = (event) => {
    if (chatRef.current && !chatRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Добавляем и удаляем слушатель события для клика на документе
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="chat-widget-container">
      {/* Иконка для открытия и закрытия чата */}
      <div className={`chat-icon ${isOpen ? 'open' : ''}`} onClick={toggleChat}>
        📩
      </div>

      {/* Окно чата, привязываем реф для отслеживания кликов */}
      {isOpen && (
        <div className="chat-window" ref={chatRef}>
          <div className="chat-header">
            <h4>Чат</h4>
            <button onClick={toggleChat}>❌</button>
          </div>
          <div className="chat-messages">
            <p>Привет! Как я могу помочь?</p>
          </div>
          <input type="text" placeholder="Введите текст..." />
        </div>
      )}
    </div>
  );
}

export default ChatWidget;
