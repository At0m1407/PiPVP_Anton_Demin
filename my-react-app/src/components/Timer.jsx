// Импортируем React, useState и useEffect из библиотеки react 
import React, { useState, useEffect } from 'react'; 
 
// Создаем и экспортируем функциональный компонент Timer 
export default function Timer() { 
  // Используем хук useState для создания состояния времени (time) и статуса таймера (isRunning) 
  const [time, setTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(false); 
 
  // Используем хук useEffect для выполнения побочных эффектов (работы с таймером) 
  useEffect(() => { 
    // Объявляем переменную intervalId для хранения идентификатора интервала 
    let intervalId; 
 
    // Проверяем статус таймера 
    if (isRunning) { 
      // Если таймер запущен, устанавливаем интервал с функцией, которая увеличивает время 
      intervalId = setInterval(() => { 
        setTime((prevTime) => prevTime + 1); 
      }, 1000); 
    } else { 
      // Если таймер остановлен, очищаем интервал 
      clearInterval(intervalId); 
    } 
 
    // Возвращаем функцию очистки интервала, которая будет вызвана при размонтировании компонента 
    return () => { 
      clearInterval(intervalId); 
    }; 
  }, [isRunning]); // Зависимость useEffect от изменения статуса таймера 
 
  // Функции для управления таймером 
  const startTimer = () => { 
    setIsRunning(true); 
  }; 
 
  const stopTimer = () => { 
    setIsRunning(false); 
  }; 
 
  const resetTimer = () => { 
    // Сбрасываем время и останавливаем таймер 
    setTime(0); 
    setIsRunning(false); 
  }; 
 
  // Возвращаем JSX разметку компонента Timer 
  return ( 
    <div> 
      <h2>Применение хука useEffect для работы с таймером</h2> 
      <div> 
        <p>Время: {time} секунд</p> 
        {/* Кнопки для управления таймером */} 
        <button onClick={startTimer}>Старт</button> 
        <button onClick={stopTimer}>Стоп</button> 
        <button onClick={resetTimer}>Сброс</button> 
      </div> 
    </div> 
  ); 
} 