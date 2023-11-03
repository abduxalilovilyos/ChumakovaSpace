import React from 'react'
import PaketItem from './PaketItem'
import PriseMoney from './PriseMoney'

const Paket = () => {
  return (
    <div className='paket'>
      <h1>Пакет <span>Standart</span></h1>
      <PaketItem text={"15-30 Солцезажигающих действий"} />
      <PaketItem text={"Подробная инструкция по применению"} />
      <PriseMoney prise={"1990"} />
    </div>
  )
}

export default Paket