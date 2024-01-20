import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

// Компонент формы для создания нового поста
const PostForm = ({ createPost }) => {
    // Локальное состояние для отслеживания ввода
    const [post, setPost] = useState({ title: '', body: '' });

    // Обработчик события для создания нового поста
    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = { ...post, id: Date.now() };
        createPost(newPost); // Вызов переданной функции createPost
        setPost({ title: '', body: '' }); // Очистка состояния формы
    };

    // Отрисовка формы
    return (
        <form>
            {/* Ввод заголовка поста */}
            <MyInput
                type="text"
                placeholder="Title"
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
            />
            {/* Ввод описания поста */}
            <MyInput
                type="text"
                placeholder="Description"
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
            />
            {/* Кнопка для создания нового поста */}
            <MyButton onClick={addNewPost}>Create</MyButton>
        </form>
    );
};

export default PostForm;
