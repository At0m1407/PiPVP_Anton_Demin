import React from 'react';

// Компонент User, принимающий props с именем пользователя и возрастом
const User = ({ name, age }) => {
  // Возвращаем JSX с информацией о пользователе
  return (
    <div>
      <h2>Информация о пользователе</h2>
      <p>Имя: {name}</p>
      <p>Возраст: {age}</p>
    </div>
  );
};

// Экспортируем компонент User
export default User;