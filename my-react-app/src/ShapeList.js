import React from 'react';

// Создаем функциональный компонент ShapeList, который принимает shapes (список фигур) и removeShape (функцию для удаления фигуры).
const ShapeList = ({ shapes, removeShape }) => {
  // Проверяем, если список фигур пуст, возвращаем сообщение об отсутствии фигур
  if (shapes.length === 0) {
    return <div><h2>Нет фигур</h2></div>;
  }
  return (
    <div>
      <h2>Список фигур</h2>
      <ul>
        {shapes.map((shape, index) => (
          <li key={index}>
            {/* Отображение названия фигуры и кнопки удаления с соответствующим индексом */}
            {shape} <button onClick={() => removeShape(index)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShapeList;
