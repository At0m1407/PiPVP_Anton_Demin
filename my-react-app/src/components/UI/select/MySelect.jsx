// Импорт библиотек React
import React from "react";

// Компонент MySelect для выпадающего списка с опциями сортировки
const MySelect = ({ options, defaultValue, value, sortPosts }) => {
    // Отрисовка компонента
    return (
        <select value={value} onChange={e => sortPosts(e.target.value)}>
            {/* Первая опция для значения по умолчанию */}
            <option disabled value=''>{defaultValue}</option>
            {/* Отображение опций для сортировки */}
            {options.map(option => (
                <option value={option.value} key={option.value}>
                    {option.name}
                </option>
            ))}
        </select>
    );
};

// Экспорт компонента MySelect
export default MySelect;