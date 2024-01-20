import React from 'react';
import './Person.css'; // Подключаем файл со стилями

// Компонент Person, принимающий props с данными о персоне
const Person = ({ name, age = 20, email }) => {
  // Возвращаем JSX с извлеченными значениями и применяем стили из файла Person.css
  return (
    <div className="person-container">
      <h2>{name}</h2>
      <p>Возраст: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

// Экспортируем компонент Person
export default Person;