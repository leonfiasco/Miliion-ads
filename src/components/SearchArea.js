import React from 'react'

const SearchArea = ({ weather, handleChange }) => {
    return (
        <div>
            <form action='' onSubmit={weather}>
                 <input placeholder='enter postcode' type='text' onChange={handleChange} />
            </form>
        </div>
    )
}

export default SearchArea
