import React from 'react';
import Image from './Image';

import cloud from '../images/clouds.svg'; 
import rain from '../images/rain.svg';
import drizzle from '../images/drizzle.svg';
import mist from '../images/mist.svg';
import fog from '../images/fog.svg';



const Display = ({ postCode}) => {
    console.log(postCode);
    return (
        <div>
            {
                postCode && (
                    
                    <div className="main-container">
                        <h1 className="location">Weather in {postCode.name}</h1>
                        <p className="celsius">{postCode.main.temp}°</p>
                        <p>{postCode.weather[0].main}</p>
                        <div>{(() => {
                            switch (postCode.weather[0].main) {
                                case 'Clouds':
                                return <Image cloud={cloud}/>;
                                case 'Rain':
                                return <Image rain={rain}/>;
                                case 'Drizzle':
                                return <Image drizzle={drizzle}/>;
                                case 'Mist':
                                return <Image mist={mist} />;
                                case 'Fog':
                                return <Image fog={fog} />;
                                default:
                            }
                        })()}</div>
                        <div className="temparature">
                            <div>
                                <h3>Max-Temp</h3>
                                <p className="celsius">{postCode.main.temp_max}°</p>
                            </div> 
                            <div>
                                <h3>Min-Temp</h3>
                                <p className="celsius">{postCode.main.temp_min}°</p>  
                            </div>    
                        </div>    
                    </div>
                ) 
            }
        </div>
    )
}

export default Display

