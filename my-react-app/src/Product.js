import React from 'react';

// Компонент Product, принимающий props с данными о продукте
const Product = ({ id, name, price, description }) => {
  // Возвращаем JSX с извлеченными значениями
  return (
    <div className="product-container">
      <h2>{name}</h2>
      <p>Цена: ${price}</p>
      <p>{description}</p>
    </div>
  );
};

// Экспортируем компонент Product
export default Product;