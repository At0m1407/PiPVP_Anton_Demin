// Импорт библиотек React и стилей компонента
import React from "react";
import classes from './Loader.module.css';

// Компонент Loader для отображения индикатора загрузки
const Loader = () => {
    // Отрисовка компонента
    return (
        <div className={classes.loader}>
        </div>
    );
};

// Экспорт компонента Loader
export default Loader;
