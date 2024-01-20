// Импорт библиотек React и компонентов MyInput и MySelect
import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

// Компонент PostFilter для фильтрации и сортировки постов
const PostFilter = ({ filter, setFilter }) => {
    // Отрисовка компонента
    return (
        <div>
            {/* Поле ввода для поиска постов */}
            <MyInput
                placeholder={"Поиск"}
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
            />
            {/* Выпадающий список для сортировки постов */}
            <MySelect
                value={filter.sort}
                sortPosts={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
                defaultValue={"Сортировка"}
                options={[
                    { value: "title", name: "По названию" },
                    { value: "body", name: "По описанию" }
                ]}
            />
        </div>
    );
};

// Экспорт компонента PostFilter
export default PostFilter;