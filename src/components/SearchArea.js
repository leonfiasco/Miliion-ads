import React from 'react'

const SearchArea = ({ requestApi }) => {
    return (
        <div>
            <form action='' onSubmit={requestApi}>
                 <input placeholder='enter postcode' type='text' />
            </form>
        </div>
    )
}

export default SearchArea
