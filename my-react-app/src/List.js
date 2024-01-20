import React, { useState } from 'react';

// Компонент List, принимающий props с массивом элементов
const List = ({ items }) => {
  // Состояние для хранения значения сортировки
  const [sortBy, setSortBy] = useState('');

  // Создаем новый массив, сортируя его в соответствии с выбранным значением сортировки
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'asc') {
      return a.localeCompare(b);
    } else if (sortBy === 'desc') {
      return b.localeCompare(a);
    } else {
      return 0;
    }
  });

  // Возвращаем JSX с фильтром и списком элементов
  return (
    <div>
      <div>
        {/* Выбор значения сортировки */}
        <label>Сортировка: </label>
        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
        >
          <option value="">Без сортировки</option>
          <option value="asc">По возрастанию</option>
          <option value="desc">По убыванию</option>
        </select>
      </div>
      {/* Отображение отсортированных элементов в виде списка */}
      <ul>
        {sortedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

// Экспортируем компонент List
export default List;