import React from 'react';
import { useNavigate } from 'react-router-dom';

const Info = () => {
    const navigate = useNavigate();

    return (
        <div>
            <button type="button" onClick={() => navigate("/")}>
                Home
            </button>
        </div>
    );
};

export default Info;