// Импорт библиотек React и стилей компонента
import React from "react";
import classes from './MyButton.module.css';

// Компонент MyButton для стилизованных кнопок
const MyButton = ({ children, ...props }) => {
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
};

// Экспорт компонента MyButton
export default MyButton;