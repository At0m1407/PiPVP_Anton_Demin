import React from "react";
import PostItem from "./PostItem";

// Компонент для отображения списка постов
const PostList = ({ posts, title, deletePost }) => {
    // Проверка, есть ли посты
    if (posts.length === 0) {
        return (
            <h1 style={{ textAlign: "center" }}>
                Посты не найдены
            </h1>
        );
    }

    // Отрисовка списка постов
    return (
        <div>
            {/* Заголовок списка постов */}
            <h1 style={{ textAlign: "center" }}>{title}</h1>
            {/* Отображение каждого поста с использованием компонента PostItem */}
            {posts.map((post, index) => (
                <PostItem deletePost={deletePost} number={index + 1} post={post} key={post.id} />
            ))}
        </div>
    );
};

export default PostList;
