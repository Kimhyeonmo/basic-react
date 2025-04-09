import React from 'react';
import { useNavigate } from 'react-router-dom';
import Greeting from '../components/Greeting';
import Counter from '../components/Counter';

const Home = () => {
    const navigate = useNavigate();
    const name = "김현모";

    const handleClick = () => {
        navigate('/info');
    };

    return (
        <div>
            <h1>Home</h1>
            <Greeting userName={name} />
            <Counter />
            <button type="button" onClick={handleClick}>Info 페이지로 이동</button>
        </div>
    );
};

export default Home;