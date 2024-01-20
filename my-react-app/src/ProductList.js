import React, { useState } from 'react';
import Product from './Product';

// Компонент ProductList, принимающий props с массивом продуктов
const ProductList = ({ products }) => {
  // Состояние для хранения критерия сортировки
  const [sortCriteria, setSortCriteria] = useState('');

  // Создаем новый массив, сортируя его в соответствии с выбранным критерием сортировки
  const sortedProducts = [...products].sort((a, b) => {
    if (sortCriteria === 'priceAsc') {
      return a.price - b.price;
    } else if (sortCriteria === 'priceDesc') {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  // Возвращаем JSX с фильтром и списком продуктов
  return (
    <div>
      <div>
        {/* Выбор критерия сортировки */}
        <label>Сортировка: </label>
        <select
          value={sortCriteria}
          onChange={e => setSortCriteria(e.target.value)}
        >
          <option value="">Без сортировки</option>
          <option value="priceAsc">По возрастанию цены</option>
          <option value="priceDesc">По убыванию цены</option>
        </select>
      </div>
      {/* Отображение отсортированных продуктов в виде списка */}
      <div>
        {sortedProducts.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

// Экспортируем компонент ProductList
export default ProductList;