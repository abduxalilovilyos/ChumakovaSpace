import React from 'react'
import PaketItem from './PaketItem'
import PriseMoney from './PriseMoney'

const PremumPaket = () => {
  return (
    <div className='preimumpaket'>
      <h1>Пакет <span>Preimum</span></h1>
      <PaketItem text={"15-30 Солцезажигающих действий"} />
      <PaketItem text={"Подробная инструкция по применению"} />
      <PaketItem text={"Аудиозапись от Евгении по вашим самым напряженным аспектам"} />
      <PaketItem text={"Инструкция “Какие камни вам подходят”"} />
      <PaketItem text={"Инструкция “Какие татуировки вам подходят"} />
      <PriseMoney prise={"2990"} />
    </div>
  )
}

export default PremumPaket