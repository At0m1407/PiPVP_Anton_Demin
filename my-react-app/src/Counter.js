import React from 'react';

// Компонент Counter, принимающий props с начальным значением счетчика и функцией увеличения
const Counter = ({ count, onIncrement }) => {
  // Возвращаем JSX с отображением текущего значения счетчика и кнопкой для его увеличения
  return (
    <div>
      <p>Текущее значение счетчика: {count}</p>
      <button onClick={onIncrement}>Увеличить счетчик</button>
    </div>
  );
};

// Экспортируем компонент Counter
export default Counter;