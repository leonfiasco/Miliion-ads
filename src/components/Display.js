import React from 'react';



const Display = ({ postCode}) => {
    
    return (
        <div>
            {
                postCode && (
                    
                    <div className="main-container">
                        <h1 className="location">{postCode.name}</h1>
                        <p className="metrics">{postCode.main.temp}°</p>
                        <div className="temparature">
                            <div>
                                <h3>Max-Temp</h3>
                                <p className="metrics">{postCode.main.temp_max}°</p>
                            </div> 
                            <div>
                                <h3>Min-Temp</h3>
                                <p className="metrics">{postCode.main.temp_min}°</p>  
                            </div>    
                        </div>    
                    </div>
                )
            }
        </div>
    )
}

export default Display

