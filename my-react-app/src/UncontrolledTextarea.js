import React, { useRef } from 'react';

// Компонент с неуправляемым <textarea>, где значение можно получить с помощью ref, установленного для <textarea>.
const UncontrolledTextarea = () => {
  // Создаем ref для <textarea>
  const textareaRef = useRef();

  // Функция для получения значения из неуправляемого <textarea> при клике на кнопку
  const handleButtonClick = () => {
    alert(`Значение: ${textareaRef.current.value}`);
  };

  return (
    <div>
      <h2>Uncontrolled Textarea</h2>
      {/* Неуправляемый <textarea> с ref */}
      <textarea ref={textareaRef} />
      {/* Кнопка для получения значения */}
      <button onClick={handleButtonClick}>Получить значение</button>
    </div>
  );
};

export default UncontrolledTextarea;