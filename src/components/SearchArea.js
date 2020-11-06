import React from 'react'

const SearchArea = ({ requestApi, handleChange }) => {
    return (
        <div>
            <form action='' onSubmit={requestApi}>
                 <input placeholder='enter postcode' type='text' onChange={handleChange} />
            </form>
        </div>
    )
}

export default SearchArea
