/* 
import React from "react";

function App() {
   return (
    <div className="App">
      
    </div>
   );
 }

 export default App;
*/

// Lab2
// #1

// import React from 'react';
// import User from './User';

// // Основной компонент приложения
// const App = () => {
//   // Данные о пользователе
//   const userData = {
//     name: 'John Doe',
//     age: 30,
//   };

//   // Возвращаем JSX с заголовком и компонентом User, передавая ему данные о пользователе
//   return (
//     <div>
//       <h1>Пример компонента User</h1>
//       {/* Распаковываем объект userData и передаем его как props компоненту User */}
//       <User {...userData} />
//     </div>
//   );
// };

// // Экспортируем компонент App
// export default App;

// #2

// import React from 'react';
// import List from './List';

// // Основной компонент приложения
// const App = () => {
//   // Массив элементов для передачи в компонент List
//   const items = [
//     'Яблоко',
//     'Груша',
//     'Банан',
//     'Апельсин',
//     'Манго',
//     'Ананас',
//   ];

//   // Возвращаем JSX с заголовком и компонентом List, передавая ему массив элементов
//   return (
//     <div>
//       <h1>Список фруктов</h1>
//       {/* Передаем массив элементов в компонент List */}
//       <List items={items} />
//     </div>
//   );
// };

// // Экспортируем компонент App
// export default App;


// #3

// import React from 'react';
// import Person from './Person';

// // Основной компонент приложения
// const App = () => {
//   // Данные о персоне
//   const personData = {
//     name: 'Иван Иванов',
//     age: 25,
//     email: 'ivan@example.com',
//   };

//   // Возвращаем JSX с заголовком и компонентом Person, передавая ему данные о персоне
//   return (
//     <div>
//       <h1>Информация о персоне</h1>
//       {/* Распаковываем объект personData и передаем его как props компоненту Person */}
//       <Person {...personData} />
//     </div>
//   );
// };

// // Экспортируем компонент App
// export default App;

// #4

// import React from 'react';
// import ProductList from './ProductList';

// // Основной компонент приложения
// const App = () => {
//   // Массив продуктов
//   const products = [
//     { id: 1, name: 'Продукт 1', price: 25.99, description: 'Описание продукта 1' },
//     { id: 2, name: 'Продукт 2', price: 15.49, description: 'Описание продукта 2' },
//     { id: 3, name: 'Продукт 3', price: 39.99, description: 'Описание продукта 3' },
//     // Добавьте больше продуктов по необходимости
//   ];

//   // Возвращаем JSX с заголовком и компонентом ProductList, передавая ему массив продуктов
//   return (
//     <div>
//       <h1>Список продуктов</h1>
//       {/* Передаем массив продуктов в компонент ProductList */}
//       <ProductList products={products} />
//     </div>
//   );
// };

// // Экспортируем компонент App
// export default App;

// #5

// import React, { useState } from 'react';
// import Counter from './Counter';

// // Основной компонент приложения
// const App = () => {
//   // Состояние для хранения значения счетчика
//   const [counter, setCounter] = useState(0);

//   // Функция для увеличения значения счетчика на единицу
//   const handleIncrement = () => {
//     setCounter(counter + 1);
//   };

//   // Возвращаем JSX с заголовком и компонентом Counter, передавая ему значение счетчика и функцию увеличения
//   return (
//     <div>
//       <h1>Пример счетчика</h1>
//       {/* Передаем значение счетчика и функцию увеличения в компонент Counter */}
//       <Counter count={counter} onIncrement={handleIncrement} />
//     </div>
//   );
// };

// // Экспортируем компонент App
// export default App;

// Lab3
// #1

// import ImageContainer from './ImageContainer';
// import CustomizableImage from './CustomizableImage';
// const App = () => {
// //Возвращаем ImageContainer, внутри которого находится CustomizableImage с указанными свойствами и стилями.
//   return (
//     <ImageContainer>
//       <CustomizableImage
//         src="https://i.stack.imgur.com/nZkTH.png?s=128&g=1"
//         width={150}
//         height={150}
//         style={{ border: '1px solid black', borderRadius: '5px' }}
//       />
//     </ImageContainer>
//   );
// };

// export default App;

// #2


// import ControlledTextarea from './ControlledTextarea';
// import UncontrolledTextarea from './UncontrolledTextarea';

// const App = () => {
//   return (
//     <div>
//       {/* Компонент ControlledTextarea с управляемым <textarea> */}
//       <ControlledTextarea />
//       {/* Компонент UncontrolledTextarea с неуправляемым <textarea> */}
//       <UncontrolledTextarea />
//     </div>
//   );
// };

// export default App;

// #3

// import React, { useState } from 'react';
// import UserGreeting from './UserGreeting';
// import GuestGreeting from './GuestGreeting';

// const App = () => {
//   // Состояние для имени пользователя
//   const [username, setUsername] = useState('');
//   // Состояние для отслеживания входа/выхода пользователя
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Обработчик события для входа пользователя
//   const handleLogin = () => {
//     // Проверяем наличие имени перед входом
//     if (username) {
//       setIsLoggedIn(true);
//     }
//   };

//   // Обработчик события для выхода пользователя
//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setUsername('');
//   };

//   return (
//     <div>
//       {/* Текстовое поле для ввода имени пользователя */}
//       <input
//         type="text"
//         placeholder="Введите ваше имя"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       {/* Кнопка "Войти" */}
//       <button onClick={handleLogin}>Войти</button>

//       {/* Условный рендеринг компонентов в зависимости от состояния */}
//       {isLoggedIn ? (
//         // Если пользователь вошел, отобразить UserGreeting с кнопкой "Выйти"
//         <UserGreeting username={username} onLogout={handleLogout} />
//       ) : (
//         // Если пользователь гость, отобразить GuestGreeting
//         <GuestGreeting />
//       )}
//     </div>
//   );
// };

// export default App;

// #4

// import React, { useState } from 'react';
// import ShapeList from './ShapeList';
// import AddShapeForm from './AddShapeForm';

// const App = () => {
//   // Состояние для списка фигур
//   const [shapes, setShapes] = useState([]);

//   // Функция для добавления новой фигуры в список
//   const addShape = (newShape) => {
//     setShapes([...shapes, newShape]);
//   };

//   // Функция для удаления фигуры из списка
//   const removeShape = (index) => {
//     // Создаем копию текущего списка фигур
//     const newShapes = [...shapes];

//     // Удаляем фигуру по переданному индексу
//     newShapes.splice(index, 1);

//     // Обновляем состояние shapes новым списком без удаленной фигуры
//     setShapes(newShapes);
//   };

//   return (
//     <div>
//       {/* Компонент для добавления новой фигуры */}
//       <AddShapeForm addShape={addShape} />
      
//       {/* Компонент для отображения списка фигур */}
//       <ShapeList shapes={shapes} removeShape={removeShape} />
//     </div>
//   );
// };

// export default App;

// Lab 4
// #1

// import React, { useState, useMemo } from 'react';
// import Count from './components/Count';
// import IsFive from './components/IsFive';

// function App() {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);

//   // Используем useMemo для мемоизации компонента Count1
//   const memoizedCount1 = useMemo(() => <Count id={1} value={count1} />, [count1]);

//   return (
//     <div className="App">
//       <h5>Счетчик 1: </h5>
//       <div className="counter">
//         <button onClick={() => setCount1(count1 + 1)}>+</button>
//         {memoizedCount1}
//       </div>

//       <h5>Счетчик 2: </h5>
//       <div className="counter">
//         <button onClick={() => setCount2(count2 + 1)}>+</button>
//         {/* Count2 и IsFive автоматически мемоизированы с помощью React.memo */}
//         <Count id={2} value={count2} />
//         <IsFive value={count2} />
//       </div>
//     </div>
//   );
// }

// export default App;

// #2

// import React, { useState } from 'react';
// import './modal.css';

// // Компонент для отображения списка фигур
// const ShapeList = ({ shapes, removeShape }) => {
//   if (shapes.length === 0) {
//     return <div><h2>Нет фигур</h2></div>;
//   }
//   return (
//     <div>
//       <h2>Shape List</h2>
//       {shapes.map((shape, index) => (
//         <div key={index}>
//           {shape} <button onClick={() => removeShape(index)}>Удалить</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// // Компонент для добавления новой фигуры
// const AddShapeForm = ({ addShape }) => {
//   const [inputValue, setInputValue] = useState('');

//   // Обработчик отправки формы
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Проверяем, что значение не пустое, затем добавляем новую фигуру через callback-функцию addShape
//     if (inputValue.trim() !== '') {
//       addShape(inputValue);
//       setInputValue('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* Инпут для ввода типа фигуры */}
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         placeholder="Введите тип фигуры"
//       />
//       {/* Кнопка для отправки формы */}
//       <button type="submit">Добавить фигуру</button>
//     </form>
//   );
// };

// // Компонент для модального окна
// const Modal = ({ isOpen, onClose, onConfirm }) => {
//   // Обработчик, если нажали на фон
//   const handleOverlayClick = (e) => {
//     if (e.target.classList.contains('modal-overlay')) {
//       onClose(); // onClose для закрытия модального окна
//     }
//   };

//   // Если окно не открыто, возвращаем null, чтобы скрыть его
//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay" onClick={handleOverlayClick}>
//       <div className="modal">
//         <p>Вы действительно хотите удалить фигуру?</p>
//         <button onClick={onConfirm}>Да</button>
//         <button onClick={onClose}>Нет</button>
//       </div>
//     </div>
//   );
// };

// // Основной компонент приложения
// const App = () => {
//   const [shapes, setShapes] = useState([]);
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [selectedShapeIndex, setSelectedShapeIndex] = useState(null);

//   // Функция для добавления новой фигуры
//   const addShape = (shape) => {
//     setShapes([...shapes, shape]);
//   };

//   // Функция для удаления фигуры
//   const removeShape = (index) => {
//     setSelectedShapeIndex(index);
//     setModalIsOpen(true);
//   };

//   // Функция для подтверждения удаления
//   const handleConfirmDelete = () => {
//     const updatedShapes = [...shapes];
//     updatedShapes.splice(selectedShapeIndex, 1);
//     setShapes(updatedShapes); // Обновляем список фигур
//     setModalIsOpen(false); // Закрываем модальное окно
//   };

//   // Функция для закрытия модального окна без удаления фигуры
//   const handleCloseModal = () => {
//     setModalIsOpen(false);
//   };

//   return (
//     <div>
//       <AddShapeForm addShape={addShape} />
//       <ShapeList shapes={shapes} removeShape={removeShape} />
//       {/* Передаем состояние модального окна и функции обработчики */}
//       <Modal
//         isOpen={modalIsOpen}
//         onClose={handleCloseModal}
//         onConfirm={handleConfirmDelete}
//       />
//     </div>
//   );
// };

// export default App;

// #3

// import React from 'react';
// import useInput from './hooks/useInput'; // Подключаем кастомный хук useInput

// const App = () => {
//   // Создаем экземпляр хука useInput, передав начальное значение поля ввода и указывая, что поле обязательно для заполнения
//   const inputHook = useInput("", true);

//   return (
//     <div>
//       {/* Привязываем состояние хука к элементу input */}
//       <input
//         type="text"
//         value={inputHook.value}
//         onChange={inputHook.onChange}
//         onBlur={inputHook.onBlur}
//       />
//       {/* Показываем ошибку, если она есть */}
//       {inputHook.error && <span>{inputHook.error}</span>}
//     </div>
//   );
// };

// export default App;

// #4

// import React, { useState } from 'react';
// import { CSSTransition } from 'react-transition-group';
// import './transition.css';

// const App = () => {
//     const [modalIsOpen, setModalIsOpen] = useState(false); // Состояние для открытия и закрытия модального окна

//     const openModal = () => {
//         setModalIsOpen(true); // Функция для открытия модального окна
//     };

//     const closeModal = () => {
//         setModalIsOpen(false); // Функция для закрытия модального окна
//     };

//     return (
//         <div className="app"> {/* Обертка приложения */}
//             <button onClick={openModal}>Открыть модальное окно</button>
//             {/* Используем CSSTransition для анимации */}
//             <CSSTransition
//                 in={modalIsOpen} // Передаем состояние для открытия и закрытия модального окна
//                 timeout={300}
//                 classNames="modal"
//                 unmountOnExit // Очищает компонент после закрытия модального окна
//             >
//                 <div className="modal">
//                     <div className="modal-content">
//                         <h2>Модальное окно</h2>
//                         <p>Содержимое модального окна...</p>
//                         <button onClick={closeModal}>Закрыть</button>
//                     </div>
//                 </div>
//             </CSSTransition>
//         </div>
//     );
// };

// export default App;

// Lab 5
// #1

import React, { useState, useEffect } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import "./styles/App.css"
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import { useFetching } from "./hooks/useFetching";
import { getPageCount, getPagesArray } from "./utils/pages";
import Pagination from "./components/UI/pagination/Pagination";
import usePagination from './hooks/usePagination';

function App() {
    // Локальное состояние для фильтрации постов
    const [filter, setFilter] = useState({ sort: '', query: '' })
    // Локальное состояние для модального окна
    const [modal, setModal] = useState(false)
    // Локальное состояние для хранения списка постов
    const [posts, setPosts] = useState([])
    // Фильтрованный и отсортированный список постов
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    // Функция для создания нового поста
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    // Функция для удаления поста
    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    // Локальное состояние для общего количества страниц
    const [totalPages, setTotalPages] = useState(0)
    // Локальное состояние для лимита постов на странице
    const [limit, setLimit] = useState(10)
    // Локальное состояние для текущей страницы
    const [page, setPage] = useState(1)

    // Функция для изменения страницы
    const changePage = (page) => {
        setPage(page)
        fetching(limit, page)
    }

    // Кастомный хук для выполнения запроса к API
    const [fetching, isLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    // Запуск запроса при монтировании компонента
    useEffect(() => { fetching(limit, page) }, []) // Зависимость [limit, page]

    // Кастомный хук для получения массива страниц
    const pagesArray = usePagination(totalPages);

    console.log(pagesArray)

    // Отрисовка компонента
    return (
        <div className="App">
            <hr style={{ margin: "15px 0" }} />
            {/* Кнопка для открытия модального окна */}
            <MyButton onClick={() => setModal(true)}>Создать пост </MyButton>
            {/* Модальное окно для создания поста */}
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm createPost={createPost} />
            </MyModal>
            {/* Фильтр для поиска и сортировки постов */}
            <PostFilter filter={filter} setFilter={setFilter} />
            {/* Отображение ошибки запроса, если есть */}
            {postError && <h1>Error ${postError}</h1>}
            {/* Отображение лоадера во время загрузки данных */}
            {isLoading
                ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader /></div>
                : <PostList deletePost={deletePost} posts={sortedAndSearchedPosts} title="Посты про JS" />
            }
            {/* Пагинация для переключения страниц */}
            <Pagination
                totalPages={totalPages}
                page={page}
                changePage={changePage}
            />
        </div>
    )
}

export default App;

// #2

// // Импортируем React из библиотеки react 
// import React from "react"; 
 
// // Импортируем компонент Timer из файла Timer.jsx 
// import Timer from "./components/Timer"; 
 
// // Создаем функциональный компонент App 
// function App() { 
//   // Возвращаем JSX разметку компонента App 
//   return ( 
//     <div className="app"> 
//       {/* Вставляем компонент Timer внутрь div с классом "app" */} 
//       <Timer /> 
//     </div> 
//   ); 
// } 
 
// // Экспортируем компонент App для использования в других файлах 
// export default App;

// #3

// import React from 'react'; 
// import Albums from './components/Albums'; 

// // Основной компонент приложения
// function App() { 
//   return ( 
//     <div className="App"> 
//       {/* 
//         Встроенный компонент Albums, отвечающий за отображение альбомов и фотографий.
//         В данном случае, App компонент всего лишь оборачивает Albums компонент.
//         Это может быть полезным, если в будущем мы добавим другие компоненты или логику внутрь App.
//       */}
//       <Albums /> 
//     </div> 
//   ); 
// } 

// // Экспорт компонента App для использования в других частях приложения
// export default App;

// #4

// import React from 'react'; 
// import Posts from './components/Posts'; 

// // Основной компонент приложения
// function App() { 
//   return ( 
//     <div className="App"> 
//       {/* 
//         Встроенный компонент Posts, отвечающий за отображение постов и комментариев.
//         В данном случае, App компонент всего лишь оборачивает Posts компонент.
//         Это может быть полезным, если в будущем мы добавим другие компоненты или логику внутрь App.
//       */}
//       <Posts /> 
//     </div> 
//   ); 
// } 

// // Экспорт компонента App для использования в других частях приложения
// export default App;