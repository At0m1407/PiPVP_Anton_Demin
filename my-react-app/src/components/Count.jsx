import React from 'react';

const render = {
    count1: 0,
    count2: 0,
};

// Счетчик с мемоизацией, чтобы избежать лишних ререндеров
const Count = React.memo(({ id, value }) => {
    console.warn(`🔴 Count${id} render: ${++render[`count${id}`]}`);

    return (
        <div>
            <h1 className="cyan">{value}</h1>
        </div>
    );
});

export default Count;
