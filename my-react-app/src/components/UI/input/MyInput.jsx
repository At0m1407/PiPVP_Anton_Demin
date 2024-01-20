// Импорт библиотек React и стилей компонента
import React from "react";
import classes from './MyInput.module.css';

// Компонент MyInput для стилизованного ввода текста
const MyInput = (props) => {
    return (
        <input {...props} className={classes.myInput} />
    );
};

// Экспорт компонента MyInput
export default MyInput;