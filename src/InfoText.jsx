import React from 'react'
import PaketItem from './PaketItem'

const InfoText = () => {
  return (
    <div className='infoText'>
        <h1>Итак, работающее, проработанное, горящее Солнце это:</h1>
        <div className="infoText__item">
            <div className="infoTextItem__group">
                <PaketItem text={"Я знаю кто я и что я несу в этот мир"} />
                <PaketItem text={"Я много чего хочу и знаю, что достигну"} />
                <PaketItem text={"Я часто смеюсь и жизнь моя в радость"} />
                <PaketItem text={"Я умею быть здесь и сейчас, и кайфовать"} />
            </div>
            <div className="infoTextItem__group">
                <PaketItem text={"Я знаю, что то, что я имею, я загадала вчера"} />
                <PaketItem text={"Я занимаюсь тем, что мне приносит удовольствие"} />
                <PaketItem text={"Я проявляю свои таланты и в моей жизни всегда присутствует элемент игры"} />
                <PaketItem text={"Я легко и быстро выбираю и не колеблюсь"} />
            </div>
        </div>
    </div>
  )
}

export default InfoText