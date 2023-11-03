import React from 'react'

const Card1 = (props) => {
  return (
    <div className='card1'>
        <div className="info">
            <h1>{props.matn1}</h1>
            <h6>{props.matn2}</h6>
        </div>
        <img src={props.rasm}  />
    </div>
  )
}

export default Card1