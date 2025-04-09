import React from 'react';

//Button 이름이다
const Button = ({ text, onButtonClick }) => {

    const handleClick = () => {
        console.log(`${text} 버튼 클릭됨`);
        onButtonClick();
    }

    return (
        <div className="button-area">
            <button type="button" onClick={handleClick}>{text}</button>
        </div>
    )
}
export default Button;