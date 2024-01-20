// Импорт компонента MyButton
import MyButton from "./UI/button/MyButton";

// Компонент PostItem для отображения отдельного поста
const PostItem = (props) => {
    // Отрисовка компонента
    return (
        <div className="post">
            <div className="post__content">
                {/* Вывод заголовка и содержимого поста */}
                <strong>{props.post.id} {props.post.title} </strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                {/* Кнопка для удаления поста */}
                <MyButton onClick={() => props.deletePost(props.post)}>Delete</MyButton>
            </div>
        </div>
    );
};

// Экспорт компонента PostItem
export default PostItem;