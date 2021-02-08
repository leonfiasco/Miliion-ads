import React from 'react';

import Header from './Header';
import Display from './Display';


import useApi from '../hooks/useApi';

// const api_key = '5f230121f2f8c4e0e15027253023a8ae';

const Main = () => {
    // const [inputText, setInputText] = useState('');
    // const [weather, setWeather] = useState();

    // const requestApi = e => {
    //     e.preventDefault();
    //     axios(`https://api.openweathermap.org/data/2.5/weather?zip=${inputText},gb&units=metric&appid=${api_key}`)
    //     .then(res => setWeather(res.data))
    //     .catch(err => console.log(err));

    // }

    // const handleChange = e => {
    //     const inputText = e.target.value;
    //     setInputText(inputText)
    // }

   const [weather, handleChange] = useApi([])


    return (
        <div className="main">
            <Header requestApi={weather} handleChange={handleChange} />
            <Display weather={weather} />
        </div>
    )
}



export default Main