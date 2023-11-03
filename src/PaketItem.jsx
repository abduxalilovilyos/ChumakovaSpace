import React from 'react'

const PaketItem = ({text}) => {
  return (
    <div className="paket__item">
        <img src="./images/photo10.png" />
        <h4>{text}</h4>
      </div>
  )
}

export default PaketItem