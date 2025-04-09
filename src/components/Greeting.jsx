import React from 'react';

//Button 이름이다
const Greating = () => {
    // 자바스크립트 코드
    const name = "hyeonmo";
    const className = ['btn', 'btn-primary'];
    // html 코드
    return (
        <>
            <h1 className={`${className[0]} ${className[1]}`}>안녕하세요</h1>
            <h2 className={className.join(' ')}>안녕하세요</h2>

            <p>리액트 공부중입니다</p>
        </>
    )
}
export default Greating;