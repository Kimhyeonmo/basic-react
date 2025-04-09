import React, { useState } from 'react';
import Button from './Button';

const Counter = () => {
    const [count, setCount] = useState(0); // 초기값 0
    const handleChange = (number) => {
        const newCount = count + number;
        if (newCount < 0 || newCount > 10) {
            console.log(`0~10 범위에서만 증가/감소 가능합니다.`);
            return; // 범위 제한
        }
        console.log(`${number > 0 ? '증가' : '감소'} 버튼 클릭됨`);
        setCount(newCount);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            {/* <h1>카운터: {count}</h1>
            <button onClick={() => setCount(count + 1)}>증가</button>
            <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>감소</button>
            <button onClick={() => setCount(0)} style={{ marginLeft: '10px' }}>리셋</button> */}

            <h1>카운터2: {count}</h1>
            <button onClick={() => handleChange(1)}>+1</button>
            <button onClick={() => handleChange(-1)} style={{ marginLeft: '10px' }}>-1</button>
            <button onClick={() => setCount(0)} style={{ marginLeft: '10px' }}>리셋</button>
        </div>
    );
};
export default Counter;

