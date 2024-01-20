import React from 'react';

// Компонент приветствия для зарегистрированного пользователя
const UserGreeting = ({ username, onLogout }) => {
  return (
    <div>
      {/* Приветствие с именем пользователя */}
      <h2>Добро пожаловать, {username}!</h2>
      {/* Кнопка "Выйти" */}
      <button onClick={onLogout}>Выйти</button>
    </div>
  );
};

export default UserGreeting;