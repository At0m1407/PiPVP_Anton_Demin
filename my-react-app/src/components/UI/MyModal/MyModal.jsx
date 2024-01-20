// Импорт библиотек React и стилей компонента
import React from "react";
import classes from "./MyModal.module.css";

// Компонент MyModal для отображения модального окна
const MyModal = ({ children, visible, setVisible }) => {
    // Формирование классов для отображения модального окна
    const rootClasses = [classes.myModal];
    if (visible) {
        rootClasses.push(classes.active);
    }

    // Отрисовка компонента
    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            {/* Контент модального окна */}
            <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

// Экспорт компонента MyModal
export default MyModal;
