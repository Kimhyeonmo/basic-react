import React, { useState } from 'react';
import Button from './Button';

const Counter = () => {
    // 상태 변수 선언
    const [count, setCount] = useState(0);
    const [nextIncrease, setNextIncrease] = useState(generateRandomValue());
    const [nextDecrease, setNextDecrease] = useState(generateRandomValue());

    // 1부터 5 사이의 랜덤 값 생성 함수
    function generateRandomValue() {
        return Math.floor(Math.random() * 5) + 1;
    }

    // 증가 처리 함수
    const handleIncrease = () => {
        const newCount = count + nextIncrease;
        if (newCount <= 100) {
            setCount(newCount);
            setNextIncrease(generateRandomValue());
        } else {
            alert('카운트는 100을 초과할 수 없습니다.');
        }
    };

    // 감소 처리 함수
    const handleDecrease = () => {
        const newCount = count - nextDecrease;
        if (newCount >= 0) {
            setCount(newCount);
            setNextDecrease(generateRandomValue());
        } else {
            alert('카운트는 0 미만이 될 수 없습니다.');
        }
    };

    // 리셋 처리 함수
    const handleReset = () => {
        setCount(0);
        setNextIncrease(generateRandomValue());
        setNextDecrease(generateRandomValue());
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>카운터: {count}</h1>
            <Button text={`랜덤 증가 (+${nextIncrease})`} onButtonClick={handleIncrease} />
            <Button text={`랜덤 감소 (-${nextDecrease})`} onButtonClick={handleDecrease} />
            <Button text="리셋" onButtonClick={handleReset} />
        </div>
    );
};

export default Counter;
