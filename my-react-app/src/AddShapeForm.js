import React, { useState } from 'react';

// Создаем функциональный компонент AddShapeForm, принимающий пропс addShape
const AddShapeForm = ({ addShape }) => {
  // Используем хук useState для создания состояния inputValue с начальным значением пустой строки
  const [inputValue, setInputValue] = useState('');

  // Функция handleSubmit вызывается при отправке формы
  const handleSubmit = (e) => {
    e.preventDefault(); // Предотвращаем стандартное поведение формы (перезагрузку страницы)

    // Проверяем, что значение inputValue не пустое
    if (inputValue.trim() !== '') {
      // Вызываем функцию addShape из пропсов, передавая ей значение inputValue
      addShape(inputValue);
      // Сбрасываем значение inputValue на пустую строку
      setInputValue('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {/* Инпут для ввода типа фигуры */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Обработчик изменения значения инпута
        placeholder="Введите тип фигуры"
      />
      {/* Кнопка для отправки формы */}
      <button type="submit">Добавить фигуру</button>
    </form>
  );
};

export default AddShapeForm;

