import React, { useState } from 'react';
import axios from 'axios'

import SearchArea from './SearchArea';

const api_key = process.env.WEATHER_APP;

const Header = () => {
    const [inputText, setInputText] = useState('')
    
    const requestApi = (e) => {
        e.preventDefault();
        axios(`https://api.openweathermap.org/data/2.5/weather?zip=${inputText},gb&units=metric&appid=${api_key}`)
        .then(data => console.log(data.data))
    }

    const handleChange = e => {
        const inputText = e.target.value;
        setInputText(inputText)
    }
    return (
        <div className='header'>
            <h1 className='header-title'>Weather App</h1>
            <SearchArea requestApi={requestApi} handleChange={handleChange} />
        </div>
    )
}

export default Header
