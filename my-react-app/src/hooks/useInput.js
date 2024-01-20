import { useState } from 'react';

// Определяем кастомный хук useInput
const useInput = (initial, required) => {
  const [value, setValue] = useState(initial);
  const [error, setError] = useState(null);

  return {
    value,
    error,
    // Обработчик изменения значения
    onChange: (e) => setValue(e.target.value),
    // Обработчик потери фокуса
    onBlur: (e) => {
      // Проверяем, если поле обязательно для заполнения и значение пусто, устанавливаем ошибку
      if (!e.target.value && required) setError("Required field");
      else setError(null);
    },
  };
};

export default useInput;