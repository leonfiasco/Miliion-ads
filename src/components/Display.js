import React from 'react'

const Display = ({ postCode}) => {
    console.log(postCode);
    return (
        <div>
            {
                postCode && (
                    <div>
                        <h1>{postCode.name}</h1>
                        <h4>{postCode.main.temp}°</h4>
                        <div className="temparature">
                            <div>
                                <h3>Max-Temp</h3>
                                <h4>{postCode.main.temp_max}°</h4>
                            </div> 
                            <div>
                                <h3>Min-Temp</h3>
                                <h4>{postCode.main.temp_min}°</h4>  
                            </div>    
                        </div>   
                    </div>
                )
            }
        </div>
    )
}

export default Display

