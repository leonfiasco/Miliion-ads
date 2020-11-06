import React, {useState} from 'react';
import axios from 'axios'

import SearchArea from './SearchArea';



const api_key = '5f230121f2f8c4e0e15027253023a8ae';


const Main = () => {
    const [inputText, setInputText] = useState('')
    
    const requestApi = (e) => {
        e.preventDefault();
        axios(`https://api.openweathermap.org/data/2.5/weather?zip=${inputText},gb&units=metric&appid=${api_key}`)
        .then(data => console.log(data))
    }

    const handleChange = e => {
        const inputText = e.target.value;
        setInputText(inputText)
    }

    return (
        <div className="main">
            <SearchArea requestApi={requestApi} handleChange={handleChange} />
        </div>
    )
}



export default Main