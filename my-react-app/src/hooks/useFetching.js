// Импорт библиотек React и хука useState
import { useState } from "react";

// Хук useFetching для управления состоянием загрузки и обработки ошибок
export const useFetching = (callback) => {
    // Состояние загрузки
    const [isLoading, setIsLoading] = useState(false);
    // Состояние ошибки
    const [error, setError] = useState('');

    // Функция fetching для выполнения асинхронного запроса с обработкой состояний
    const fetching = async (...args) => {
        try {
            // Установка состояния загрузки в true перед выполнением запроса
            setIsLoading(true);
            // Выполнение переданной функции с аргументами
            await callback(...args);
        } catch (e) {
            // Обработка ошибки и установка состояния ошибки
            setError(e.message);
        } finally {
            // Установка состояния загрузки в false после выполнения запроса
            setIsLoading(false);
        }
    };

    // Возвращение функции fetching, состояния isLoading и error
    return [fetching, isLoading, error];
};
