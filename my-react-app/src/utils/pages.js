// Функция getPageCount для расчета общего количества страниц
export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit);
}

// Функция getPagesArray для формирования массива страниц
export const getPagesArray = (totalPages) => {
    let result = [];
    // Заполнение массива страниц от 1 до totalPages
    for (let i = 0; i < totalPages; i++) {
        result.push(i + 1);
    }
    // Возвращение массива страниц
    return result;
}