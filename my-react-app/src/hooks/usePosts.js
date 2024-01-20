// Импорт библиотек React и хука useMemo
import { useMemo } from "react";

// Хук useSortedPosts для сортировки постов
export const useSortedPosts = (posts, sort) => {
    // Мемоизация для оптимизации производительности
    const sortedPost = useMemo(() => {
        console.log("Функция вызвана");
        // Сортировка постов по выбранному свойству
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        } else {
            return posts;
        }
    }, [sort, posts]);

    // Возвращение отсортированных постов
    return sortedPost;
};

// Хук usePosts для фильтрации и сортировки постов
export const usePosts = (posts, sort, query) => {
    // Применение хука useSortedPosts для сортировки постов
    const sortedPost = useSortedPosts(posts, sort);

    // Мемоизация для оптимизации производительности
    const sortedAndSearchedPosts = useMemo(() => {
        // Фильтрация постов по запросу
        return sortedPost.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
    }, [query, sortedPost]);

    // Возвращение отфильтрованных и отсортированных постов
    return sortedAndSearchedPosts;
};
