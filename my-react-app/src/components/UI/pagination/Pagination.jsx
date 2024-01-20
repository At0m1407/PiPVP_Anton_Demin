// Импорт библиотек React и функции getPagesArray
import React from "react";
import { getPagesArray } from "../../../utils/pages";

// Компонент Pagination для отображения списка страниц
const Pagination = ({ totalPages, page, changePage }) => {
    // Формирование массива страниц с использованием getPagesArray
    let pagesArray = getPagesArray(totalPages);

    // Отрисовка компонента
    return (
        <div className="page__wrapper">
            {/* Отображение списка страниц */}
            {pagesArray.map(p => (
                <span
                    onClick={() => { changePage(p) }}
                    key={p}
                    className={page === p ? 'page page__current' : 'page'}>
                    {p}
                </span>
            ))}
        </div>
    );
}

// Экспорт компонента Pagination
export default Pagination;
