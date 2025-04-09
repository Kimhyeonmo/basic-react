import React, { useState } from 'react';
import Button from './Button';

const Counter = () => {
    const [count, setCount] = useState(0); // 초기값 0
    const handleChange = (direction) => {
        const randomValue = Math.floor(Math.random() * 6); // 0~5 사이의 랜덤 값 생성
        const changeAmount = direction * randomValue; // 증가 또는 감소 값 결정
        const newCount = count + changeAmount;

        if (newCount < 0 || newCount > 100) {
            console.log('0~10 범위에서만 증가/감소 가능합니다.');
            return; // 범위를 벗어나면 업데이트하지 않음
        }

        console.log(`${changeAmount > 0 ? '증가' : '감소'} 버튼 클릭됨: ${randomValue}`);
        setCount(newCount);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            {/* <h1>카운터: {count}</h1>
            <button onClick={() => setCount(count + 1)}>증가</button>
            <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>감소</button>
            <button onClick={() => setCount(0)} style={{ marginLeft: '10px' }}>리셋</button> */}
            <h1>카운터: {count}</h1>
            <Button text="증가" onButtonClick={() => handleChange(+1)} />
            <Button text="감소" onButtonClick={() => handleChange(-1)} />
            <Button text="리셋" onButtonClick={() => setCount(0)} />
            {/* <h1>카운터2: {count}</h1>
            <button onClick={() => handleChange(1)}>+1</button>
            <button onClick={() => handleChange(-1)} style={{ marginLeft: '10px' }}>-1</button>
            <button onClick={() => setCount(0)} style={{ marginLeft: '10px' }}>리셋</button> */}
        </div>
    );
};
export default Counter;

