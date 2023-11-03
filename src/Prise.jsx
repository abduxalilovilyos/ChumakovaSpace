import React from 'react'
import Paket from './Paket'
import PremumPaket from './PremumPaket'

const Prise = () => {
  return (
    <div className='prise'>
        <h1>Стоимость:</h1>
        <div className="priseItem">
          <Paket />
          <PremumPaket />
        </div>
    </div>
  )
}

export default Prise