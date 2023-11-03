import React from 'react'

const SerItem = ({number,h4,h3, photo}) => {
  return (
    <div className='serItem'>
        <div className="serItem__text">
            <div className="serItem__textItem">
            <div className="number">
                <h1>{number}</h1>
            </div>
            <h4>{h4}</h4>
            </div>
            <h3>{h3} </h3>
        </div>
        <img src={photo}  />
    </div>
  )
}

export default SerItem