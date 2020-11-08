import React from 'react'


const Image = ({ cloud, rain, drizzle, mist }) => {
    return (
        <div>
           {(() => {
               if (cloud) {
                   return <img alt="clouds" src={cloud} />
               } else if (rain) {
                   return <img alt="rain" src={rain} />
               } else if (drizzle) {
                   return <img alt="drizzle" src={drizzle} />
               } else if (mist) {
                return <img alt="mist" src={mist} />
               }
           })()}
        </div>
    )
}

export default Image
