import React from 'react';

let renderCount = 0;

// Компонент, проверяющий, является ли значение пятью с небольшой задержкой
const IsFive = React.memo(({ value }) => {
    console.warn(`🔴 isFive render: ${++renderCount}`);

    // Симуляция долгого вычисления для демонстрации проблемы
    const getResult = () => {
        let i = 0;
        while (i < 600000000) i++;
        return value === 5 ? '✅ Это пять :D' : '❌ Это не пять :(';
    };

    return <h3>{getResult()}</h3>;
});

export default IsFive;
