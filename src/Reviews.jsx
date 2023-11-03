import React from 'react'
import ReviewsCard from './ReviewsCard'

const Reviews = () => {
  return (
    <div className='reviews'>
        <h1>Отзывы</h1>
        <div className="reviews__item">
            <ReviewsCard rasm={"./images/photo12.png"} text={"Кристина Жегунова PR директор, блогер"} />
            <ReviewsCard rasm={"./images/photo13.png"} text={"Кристина Жегунова PR директор, блогер"} />
            <ReviewsCard rasm={"./images/photo12.png"} text={"Кристина Жегунова PR директор, блогер"} />
            <ReviewsCard rasm={"./images/photo13.png"} text={"Кристина Жегунова PR директор, блогер"} />
        </div>
    </div>
  )
}

export default Reviews