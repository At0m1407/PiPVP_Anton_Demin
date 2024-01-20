import React, { useState } from 'react';

// Компонент с управляемым <textarea>, где значение текста привязано к состоянию text.
// Изменения в <textarea> вызывают функцию handleChange, обновляющую состояние.
const ControlledTextarea = () => {
  const [value, setValue] = useState('');

  // Функция для обновления состояния при изменении текста в <textarea>
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <h2>Controlled Textarea</h2>
      {/* Управляемый <textarea> */}
      <textarea value={value} onChange={handleChange} />
      <p>Значение: {value}</p>
    </div>
  );
};

export default ControlledTextarea;
