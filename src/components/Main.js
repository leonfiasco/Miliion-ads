import React, {useState} from 'react';
import axios from 'axios'

import SearchArea from './SearchArea';






const Main = () => {


    return (
        <div className="main">
            <SearchArea requestApi={requestApi} />
        </div>
    )
}



export default Main