import React from 'react';

const Button = ({ children, onClick, className = '' }) => {
  const baseStyles = 'font-bold py-2 px-4 rounded transition duration-300 ease-in-out';

  // Пример различных стилей кнопок
  // Для простоты мы будем использовать один стиль, но вы можете легко расширить это
  const primaryStyles = 'bg-blue-500 hover:bg-blue-700 text-white';

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${primaryStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
