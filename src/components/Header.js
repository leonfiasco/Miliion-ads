import React from 'react';

import SearchArea from './SearchArea';



const Header = ({ requestApi, handleChange }) => {
    return (
        <div className='header'>
            <h1 className='header-title'>Weather App</h1>
            <SearchArea requestApi={requestApi} handleChange={handleChange} />
        </div>
    )
}

export default Header
