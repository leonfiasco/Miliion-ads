import { useState, useEffect } from 'react';
import axios from 'axios';



const api_key = '5f230121f2f8c4e0e15027253023a8ae';


const useApi = () => {

const [inputText, setInputText] = useState('');
const [weather, setWeather] = useState();

const requestApi = () => {   
    axios(`https://api.openweathermap.org/data/2.5/weather?zip=${inputText},gb&units=metric&appid=${api_key}`)
    .then(res => setWeather(res.data))
    .catch(err => console.log(err));

}

const handleChange = e => {
    const inputText = e.target.value;
    setInputText(inputText)
}


useEffect(() => {
    if (inputText.match(/^[a-z 0-9]{2,4}/ig)) {
        return  requestApi();
    }
            
    })

    return [weather, handleChange]
}







export default useApi;

