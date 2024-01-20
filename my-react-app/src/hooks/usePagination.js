// Импорт библиотек React и хука useMemo
import { useMemo } from 'react';

// Хук usePagination для формирования массива страниц
const usePagination = (totalPages) => {
    // Мемоизация массива страниц с использованием useMemo
    const pagesArray = useMemo(() => {
        let result = [];
        // Заполнение массива страниц от 1 до totalPages
        for (let i = 0; i < totalPages; i++) {
            result.push(i + 1);
        }
        // Возвращение массива страниц
        return result;
    }, [totalPages]);//зависимость

    // Возвращение массива страниц
    return pagesArray;
};

// Экспорт хука usePagination
export default usePagination;

