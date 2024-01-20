// import React, { useState, useEffect } from 'react'; 

// // Компонент Posts, отвечающий за отображение постов и комментариев
// const Posts = () => { 
//   // Состояния для хранения данных о постах, комментариях и новом комментарии
//   const [posts, setPosts] = useState([]); 
//   const [comments, setComments] = useState([]); 
//   const [newComment, setNewComment] = useState({ name: '', body: '' }); 

//   // Загрузка данных с сервера при монтировании компонента
//   useEffect(() => { 
//     // Функция для загрузки данных с сервера 
//     const fetchData = async () => { 
//       try { 
//         // Загрузка данных о постах
//         const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts'); 
//         const postsData = await postsResponse.json(); 
//         setPosts(postsData); 

//         // Загрузка данных о комментариях
//         const commentsResponse = await fetch('https://jsonplaceholder.typicode.com/comments'); 
//         const commentsData = await commentsResponse.json(); 
//         setComments(commentsData); 
//       } catch (error) { 
//         console.error('Error fetching data:', error); 
//       } 
//     }; 

//     // Вызываем функцию загрузки данных 
//     fetchData(); 
//   }, []); // Пустой массив зависимостей означает, что useEffect выполнится только при монтировании компонента 

//   // Обработчик изменений в полях ввода нового комментария
//   const handleInputChange = (event) => { 
//     const { name, value } = event.target; 
//     setNewComment((prevComment) => ({ ...prevComment, [name]: value })); 
//   }; 

//   // Функция для отправки комментария на сервер 
//   const submitComment = async (postId) => { 
//     try { 
//       const response = await fetch('https://jsonplaceholder.typicode.com/comments', { 
//         method: 'POST', 
//         headers: { 
//           'Content-Type': 'application/json', 
//         }, 
//         body: JSON.stringify({ 
//           postId: postId, 
//           name: newComment.name, 
//           body: newComment.body, 
//         }), 
//       }); 

//       if (!response.ok) { 
//         throw new Error('Failed to submit comment'); 
//       } 

//       // Получаем данные о новом комментарии
//       const newCommentData = await response.json(); 

//       // Обновляем состояние комментариев, добавляя новый комментарий 
//       setComments((prevComments) => [...prevComments, newCommentData]); 

//       // Очищаем введенные данные после отправки 
//       setNewComment({ name: '', body: '' }); 
//     } catch (error) { 
//       console.error('Error submitting comment:', error); 
//     } 
//   }; 

//   // Рендеринг компонента 
//   return ( 
//     <div> 
//       <h1>Посты и комментарии</h1> 
//       {posts.map((post) => ( 
//         <div key={post.id}> 
//           <h2>{post.title}</h2> 
//           <p>{post.body}</p> 
//           {comments 
//             .filter((comment) => comment.postId === post.id) 
//             .map((comment) => ( 
//               <div key={comment.id}> 
//                 <strong>{comment.name}:</strong> {comment.body} 
//               </div> 
//             ))} 
//           {/* Форма для ввода нового комментария */}
//           <form> 
//             <label> 
//               Имя: 
//               <input 
//                 type="text" 
//                 name="name" 
//                 value={newComment.name} 
//                 onChange={handleInputChange} 
//               /> 
//             </label> 
//             <br /> 
//             <label> 
//               Комментарий: 
//               <textarea 
//                 name="body" 
//                 value={newComment.body} 
//                 onChange={handleInputChange} 
//               /> 
//             </label> 
//             <br /> 
//             {/* Кнопка для отправки нового комментария */}
//             <button type="button" onClick={() => submitComment(post.id)}> 
//               Отправить комментарий 
//             </button> 
//           </form> 
//         </div> 
//       ))} 
//     </div> 
//   ); 
// }; 

// // Экспорт компонента Posts для использования в других частях приложения
// export default Posts;
