import React from 'react'

const PriseMoney = ({prise}) => {
  return (
    <div className="prime__prise">
    <div className='prise__money'
    style={{
        background: 'url(images/bg3.png) no-repeat center center / cover'
    }}>
        <h4>Стоимость</h4>
        <h1>{prise} рублей</h1>        
    </div>
    <button>Перейти к покупке</button>
    </div>
  )
}

export default PriseMoney