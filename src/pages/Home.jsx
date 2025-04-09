import React from 'react'
import Greating from '../components/Greeting'
import Button from '../components/Button'
import Counter from '../components/Counter'
const Home = () => {
    const name = "김현모"; // 원하는 이름으로 변경하세요.
    const handleClick = () => {
        console.log("버튼 클릭됨");
    };
    return (
        <div>Home
            <Greating userName={name} />
            <Button text="버튼" onButtonClick={handleClick} />
            <Counter />
            <button type="button">Info 페이지로 이동</button>

        </div>
    )
}
