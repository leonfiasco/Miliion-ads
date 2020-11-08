import React, {useState} from 'react';
import axios from 'axios';

import Header from './Header';
import Display from './Display';

const api_key = '5f230121f2f8c4e0e15027253023a8ae';

const Main = () => {
    const [inputText, setInputText] = useState('');
    const [postCode, setPostCode] = useState();

    const requestApi = e => {
        e.preventDefault();
        axios(`https://api.openweathermap.org/data/2.5/weather?zip=${inputText},gb&units=metric&appid=${api_key}`)
        .then(res => setPostCode(res.data))
        .catch(err => console.log(err));

    }

    const handleChange = e => {
        const inputText = e.target.value;
        setInputText(inputText)
    }


    return (
        <div className="main">
            <Header requestApi={requestApi} handleChange={handleChange} />
            <Display postCode={postCode} />
        </div>
    )
}



export default Main