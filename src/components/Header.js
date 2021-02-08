import React from 'react';

import SearchArea from './SearchArea';



const Header = ({ weather, handleChange }) => {
    return (
        <div className='header'>
            <h1 className='header-title'>Weather App</h1>
            <SearchArea requestApi={weather} handleChange={handleChange} />
        </div>
    )
}

export default Header
