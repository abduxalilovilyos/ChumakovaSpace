import React from 'react'

const Card2 = ({photo,text1,text2}) => {
  return (
    <div className='card2'>
        <img src={photo}  />
    <div className="info">
        <h1>{text1}</h1>
        <h6>{text2}</h6>
    </div>
    </div>
  )
}

export default Card2