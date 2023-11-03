import React from 'react'
import SerItem from './SerItem'
import LastSer from './LastSer'

const Servise = () => {
  return (
    <div className='servise'>
        <h1>Вы получите файл содержащий:</h1>
        <SerItem number={1} h4={"15-30 Солцезажигающих действий"} h3={"Индивидуальные для каждого действия, которые желательно перевести в привычки и выполнять каждый день. "} photo={"./images/photo5.png"}  />
        <SerItem number={2} h4={"Подробную инструкцию по применению"} h3={"Полное описание того, как этим пользоваться, легко внедрить в свою жизнь, с чего начать и на что обратить внимание "} photo={"./images/photo6.png"}  />
        <h1>В пакете premium</h1>     
        <SerItem number={3} h4={"Аудиозапись от Евгении по вашим  самым напряженным аспектам"} h3={"Рекомендации по проработке некоторых напряженных аспектов и их трансформации в ваши сильные стороны "} photo={"./images/photo7.png"}  />
        <LastSer />
        
     </div>
  )
}

export default Servise